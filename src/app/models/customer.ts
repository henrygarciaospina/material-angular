export class Customer {
     id: string;
     firstName: string ;
     lastName: string;
     identityDocument: string;
     mobile: string;

     constructor(id: string, firstName: string, lastName: string, identityDocument: string,
                mobile: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.identityDocument = identityDocument;
        this.mobile = mobile;    
     }
}
