import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUser} from './create-user'

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}
    @Get()
    async getUsers() {
        const users = await this.UsersService.getUsers();
        return users;
    }
    @Get (":userId")
    async getUser (@Param("userId") userId){
        const user = await this.UsersService.getUser(userId);
        return user;
    }
    @Post()
    async addUser(@Body() CreateUser:CreateUser) {
        const user = await this.UsersService.addUser(CreateUser);
        return user;
    }
    @Delete()
    async deleteUser(@Query() query) {
        const users = await this.UsersService.deleteUser(query.userId);
        return users;
    }

}
