export default interface Contact {
    id?: number;
    name: string;
    contactNo: string;
    status: string;
    location: string;
    tags: string[];
    createdAt?: Date;
}
