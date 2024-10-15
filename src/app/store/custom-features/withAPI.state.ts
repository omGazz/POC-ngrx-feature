import { computed, inject, Type } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { APIPort } from './api.port';
import { person } from '../person.store';

export type WithAPIModel = {
  items: string[];
};
export type WithAPIState = { model: WithAPIModel };

const initialState: WithAPIState = { model: { items: [] } };

export function withAPI(dataServiceType: Type<APIPort<person>>) {
  return signalStoreFeature(
    withState<WithAPIState>(initialState),
    withComputed(({ model: { items } }) => ({
      list: computed(() => items()),
    })),
    withMethods((state, service = inject(dataServiceType)) => ({
      stamp() {
        service.stamp();
      },
      addItem(value: string) {
        service.add(value);
        /** Added a service.getAll() instead of returning the list from the Add method
         * only for debugging purposes
         */
        const list = service.getAll();
        patchState(state, () => ({
          model: { items: list },
        }));
      },
      removeItem(value: string) {
        service.remove(value);
        /** Added a service.getAll() instead of returning the list from the Add method
         * only for debugging purposes
         */
        const list = service.getAll();
        patchState(state, () => ({
          model: { items: list },
        }));
      },
      getList() {
        const list = service.getAll();
        console.log('Items in the Adapter:', list);
        patchState(state, () => ({
          model: { items: list },
        }));
      },
    }))
  );
}
