import { Injectable, HttpException } from '@nestjs/common';
import { USERS} from "./users.mock"

@Injectable()
export class UsersService {
    users = USERS;
    //getting all users 
    getUsers() : Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.users)
        });
    }
    getUser(userId) : Promise<any> {
        let id = Number(userId)
        return new Promise((resolve, reject) => {
            const user = this.users.find(user => user.id === id);
            if(!user){
                 throw new HttpException("user does not exist", 404);
            }
            resolve(user)
        });
    }
    addUser(user) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.users.push(user);
            resolve(this.users)
        })
    }

    deleteUser(userId) : Promise<any> {
        let id = Number(userId);
        return new Promise((resolve, reject) => {
            let index = this.users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new HttpException('user does not exist', 404);
            }
            this.users.splice(index, 1);
            resolve(this.users);

        });
    }

    

    
}
