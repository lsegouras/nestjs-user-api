import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@UsePipes(ValidationPipe)
	createUsers(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.usersService.createUsers(createUserDto);
	}

	@Get()
	getAllUsers() {
		return this.usersService.findAllUsers();
	}

	@Get(':id')
	getUserById(@Param('id') id: string): Promise<User> {
		return this.usersService.findOneUser(id);
	}

	@Patch(':id')
	updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.updateUser(id, updateUserDto);
	}

	@Delete(':id')
	removeUser(@Param('id') id: string): Promise<void> {
		return this.usersService.removeUser(id);
	}
}
