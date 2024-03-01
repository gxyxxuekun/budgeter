export interface Seller {
    _id: string;
    name: string;
    location: string;
    rating: number;
  }


  export interface Product {
    title:string;
    description:string;
    rating:number;
    seller:string;
    _id:string;
  }

  export interface Transaction {
    date:Date,
    merchants:string,
    price:number,
    _id:string

  }
