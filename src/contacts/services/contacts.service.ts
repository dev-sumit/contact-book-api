import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../models/contact.entity';
import Contact from '../models/contact.interface';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(ContactEntity)
        private readonly contactRepository: Repository<ContactEntity> 
    ) {
        
    }

    createContact(contact: Contact) {
        return this.contactRepository.save(contact);
    }

    findAllContacts() {
        return this.contactRepository.find();
    }

    updateContact(contactId: number, contact: Contact) {
        return this.contactRepository.update(contactId, contact);
    }

    findContactById(contactId: number) {
        return this.contactRepository.findOne(contactId);
    }

    deleteContact(contactId: number) {
        return this.contactRepository.delete(contactId);
    }
}
