import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { OtpService } from './app.otp';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ChatModule } from './modules/chat/chat.module';
import { RoomsModule } from './modules/rooms/rooms.module';
import { StudentsModule } from './modules/students/students.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    UsersModule,
    ChatModule,
    RoomsModule,
    StudentsModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, OtpService],
})
export class AppModule {}
