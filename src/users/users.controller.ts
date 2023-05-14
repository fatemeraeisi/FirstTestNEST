import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    adduser(
        @Body('name') userName: string,
        @Body('name') userDegree: string, 
        @Body('degree') userAge: number,) {
        this.userService.insertUser(userName, userDegree, userAge);
        return { message: 'کاربر با موفقیت ذخیره شد' }
    }
    @Get()
    getAllUsers() {
        return this.userService.getUsers()
    }

    @Get(':id')
    getSingleUser(@Param('id') userID: string,) {
        return this.userService.getSingleUser(userID)
    }

    @Patch(':id')
    updateUserInfo(@Param('id') userID: string,@Body('name') userName: string, @Body('name') userDegree: string, @Body('degree') userAge: number,) {
        this.userService.updateUser(userID,userName,userDegree,userAge)
        return { message: 'کاربر با موفقیت ویرایش شد' }
    }

    @Delete(':id')
    removeUser(@Param('id') userID: string,){
        this.userService.deleteUser(userID)
        return { message: 'کاربر با موفقیت حذف شد' }
    }


}