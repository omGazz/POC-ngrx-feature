import { Injectable } from '@angular/core';
import { APIPort } from './api.port';

@Injectable({
  providedIn: 'root'
})
export class ApiAdapter extends APIPort<string> {
  /**I'm using the roperty items only to sinplify and don't add complexity of
   * a backend request, but the flow is the same. The items property simulate
   * data stored in the DB and returned by endpoints
   * 
   */
  items: string[] = [];

  stamp(){
    console.log('Items in the Adapter:', this.items);
  }

  add(value: string){
    this.items.push(value);
  }

  remove(value: string){
    this.items = this.items.filter(item => item !== value);
  }

  getAll(): string[]{
    return this.items;
  }

}
