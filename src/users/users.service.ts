/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const newUser: User = { id: uuidv4(), ...dto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  update(id: string, dto: UpdateUserDto): User {
    const user = this.findOne(id);
    const updatedUser = { ...user, ...dto };
    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
    return updatedUser;
  }

  delete(id: string): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) throw new NotFoundException('User not found');
    this.users.splice(index, 1);
  }
}
