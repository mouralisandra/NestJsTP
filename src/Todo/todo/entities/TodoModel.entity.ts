import { statusEnum } from "./statusEnum";

export class TodoModel { 
      id : number ; 
      name : string ; 
      description : string ; 
      createdAt: Date; 
      status : statusEnum ; 
}