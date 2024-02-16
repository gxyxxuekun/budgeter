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
