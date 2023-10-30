import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/user.entity';
import { TypeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: 'sqlite',
		// 	database: ':memory:',
		// 	entities: [User],
		// 	synchronize: true,
		// }),
		UsersModule,
		TypeOrmModule.forRoot(TypeOrmConfig),
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
