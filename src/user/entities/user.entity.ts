import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    comment: string;

    @Prop({ default: Date.now })
    date: Date;

    @Prop()
    star: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
