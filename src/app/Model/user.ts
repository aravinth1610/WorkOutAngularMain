export class User {

    name: string
    mobNo: string
    gmail: string
    Address: Address

    constructor(name?: string, mobNo?: string, gmail?: string) {
        this.name = name;
        this.mobNo = mobNo;
        this.gmail = gmail;
    }


}

class Address {
    address1: string
    city: string
    state: string
}