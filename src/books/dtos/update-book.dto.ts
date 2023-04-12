/* eslint-disable prettier/prettier */
import { IsNotEmpty, Min, Max, IsString, Length, IsUUID } from 'class-validator';

export class UpdateBookDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3, 100)
    title: string;
  
    @IsNotEmpty()
    @Min(1)
    @Max(10)
    rating: number;
  
    @IsNotEmpty()
    @Min(0)
    @Max(1000)
    price: number;
  
    @IsNotEmpty()
    @IsUUID()
    authorId: string;
}