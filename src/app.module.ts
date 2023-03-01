import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModuleModule } from './CommonModule/Common-mod.module';
import { TodoModule } from './Todo/todo/todo.module';


@Module({
  imports: [TodoModule,CommonModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
