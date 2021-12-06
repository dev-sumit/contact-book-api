import { Module } from '@nestjs/common';
import { ContactsService } from './services/contacts.service';
import { ContactsController } from './controllers/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './models/contact.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ContactEntity])
    ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
