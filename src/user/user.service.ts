import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(body: any): Promise<User> {
    const user = new this.userModel(body);
    if (!user) {
      throw new Error('User not created');
    }
    return await user.save();
  }

  async findAll(): Promise<User[]> {

    const users = await this.userModel.find().exec();
    if (!users) {
      throw new Error('Users not found');
    }
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findTen(): Promise<User[]> {
    const users = await this.userModel.find().sort({ date: -1 }).limit(10).exec();
    if (!users) {
      throw new Error('Users not found');
    }
    return users;
  }

  async update(id: string, updateData: Partial<User>): Promise<User | null> {
    const user = await this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async remove(id: string): Promise<String> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return "Comment deleted";
  }
}
