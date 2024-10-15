import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonStore } from './store/person.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PersonStore],
})
export class AppComponent {
  title = 'custom-feature-store-sample';
  store = inject(PersonStore);

  name = this.store.name;
  specialName = this.store.specialName;
  interrogativeName = this.store.interrogativeName;
  peopleList = this.store.peopleList;
  fullList = this.store.list;

  protected selectedName = 'Goku';

  onSelectedNameChange() {
    //this method id from the main store
    this.store.updateName(this.selectedName);
  }

  stamp() {
    // this method is from the CustomFeatureStore
    this.store.stamp();
  }

  addItem() {
    // this method is from the CustomFeatureStore
    const sample = this.selectedName;
    this.store.addItem(sample);
  }

  removeItem() {
    // this method is from the CustomFeatureStore
    const sample = this.selectedName;
    this.store.removeItem(sample);
  }

  getUpdatedList() {
    // this method is from the CustomFeatureStore
    this.store.getList();
  }
}
