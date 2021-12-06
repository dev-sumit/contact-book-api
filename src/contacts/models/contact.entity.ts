import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contact')
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    name: string;

    @Column({default: ''})
    contactNo: string;

    @Column({default: ''})
    status: string;

    @Column({default: ''})
    location: string;

    @Column("text", { array: true, default:"{}" })
    tags: string[];

    @Column({default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}

