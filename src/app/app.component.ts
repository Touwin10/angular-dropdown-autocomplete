
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

class Contact {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  openDrop: boolean = false;
  selectedItem: Contact;
  contacts: Contact[] = [];
  filterContacts: Contact[] = []
  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < 10; index++) {
      const contact = new Contact();
      contact.avatar = faker.internet.avatar();
      contact.name = faker.name.findName();
      contact.phone = faker.phone.phoneNumber();
      contact.email = faker.internet.email();
      contact.address = faker.address.streetAddress();
      this.contacts.push(contact);
    }
    this.filterContacts = this.contacts;
  }

  onOpenDrop(state) {
    this.openDrop = state;
  }

  onSelectItem(contact: Contact) {
    this.selectedItem = contact;
  }

  onSearchContact(value: string) {
    value = (value || '').toLowerCase();

    this.filterContacts = this.contacts.filter(c => {
      const name = c.name.toLowerCase();
      const email = c.email.toLowerCase();
      return name.includes(value) || email.includes(value);
    });

  }

}
