import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { User, UserDocument } from '../users/entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
 
  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save()
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {
        _id: id
      },
      {
        updateUserDto
      },
      {
        new: true
      }
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({
      ìd: id
    }).exec();
  }
}
