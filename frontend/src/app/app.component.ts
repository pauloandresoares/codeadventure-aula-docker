import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  contacts: Contact[];

  constructor(private contactService: ContactService) {}
  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((result: any) => {
      this.contacts = result.data;
    });
  }

}
