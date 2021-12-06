import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Contact from '../models/contact.interface';
import { ContactsService } from '../services/contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) {

    }

    @Post()
    create(@Body() contact: Contact) {
        return this.contactsService.createContact(contact);
    }   

    @Get()
    findAll() {
        return this.contactsService.findAllContacts();
    }

    @Put('update/:id')
    update(
            @Param('id') contactId: number, 
            @Body() contact: Contact
        ) {
        return this.contactsService.updateContact(contactId, contact)
    }

    @Get(':id')
    findContactById(
        @Param('id') contactId: number
    ){
        return this.contactsService.findContactById(contactId);
    }

    @Delete(':delete')
    deleteContactById(
        @Param('id') contactId: number
    ) {
        return this.contactsService.deleteContact(contactId);
    }

}
