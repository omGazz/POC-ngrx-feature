import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { withAPI } from './custom-features/withAPI.state';
import { APIPort } from './custom-features/api.port';
import ts from 'typescript';

export type person = string;

type PersonState = {
  name: string;
  people: person[];
};

const initialState: PersonState = {
  name: 'Hello, World',
  people: ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Krillin'],
};

export const PersonStore = signalStore(
  withState(initialState),
  /**
   * TODO: Find a way without using @ts-ignore, Something wrong with
   * the abstract class
   */
  //@ts-ignore
  withAPI(APIPort),
  withMethods((store) => ({
    updateName(name: string) {
      patchState(store, () => ({ name: name }));
    },
  })),
  withComputed((state) => ({
    specialName: computed(() => state.name() + '!!!'),
    interrogativeName: computed(() => state.name() + '???'),
    peopleList: computed(() => state.people()),
  }))
);
