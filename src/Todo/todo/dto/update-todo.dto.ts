import { IsNotEmpty, IsString } from "class-validator";
import { statusEnum } from "../entities/statusEnum";

export class UpdateTodoDto { 
    @IsString()
    @IsNotEmpty()
    
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string; 

    @IsString()
    @IsNotEmpty()
    status : statusEnum ; 
}