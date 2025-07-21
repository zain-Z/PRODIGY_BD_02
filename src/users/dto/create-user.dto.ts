/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  age: number;
}
