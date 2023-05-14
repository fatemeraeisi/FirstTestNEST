import { Injectable, NotFoundException } from "@nestjs/common";
import { UserModel } from "./users.model";
@Injectable()
export class UserService {

    usersList: UserModel[] = []
    insertUser(name: string, degree: string, age: number) {
        const user = new UserModel(Math.random(), name, degree, age);
        this.usersList.push(user);

    }
    getUsers() {
        return [...this.usersList];
    }
    getSingleUser(userID: string) {
        return this.usersList[this.findUser(userID)]
    }
    updateUser(userID: string,name: string, degree: string, age: number){
        const updateUser=this.usersList[this.findUser(userID)];
        if (name){ updateUser.name=name;}
        if (degree){ updateUser.degree=degree;}
        if (age){ updateUser.age=age;}
        this.usersList[this.findUser(userID)]=updateUser
       
    }
    deleteUser(userID: string,){
        this.usersList.splice(this.findUser(userID),1)
    }
    findUser(userID: string){
        const userIndex = this.usersList.findIndex((user) => user.id.toString() === userID);
        if(!userIndex&& userIndex!==0){
            throw new NotFoundException('کاربر یافت نشد');
            
        }
        return userIndex;
    }
}