import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}

	async createUsers(createUserDto: CreateUserDto): Promise<User> {
		return await this.userRepository.save(createUserDto);
	}

	findAllUsers() {
		return this.userRepository.find();
	}

	async findOneUser(id: string): Promise<User> {
		const user = await this.userRepository.findOneBy({ id: id });

		if (!user) {
			throw new NotFoundException(`User with ID "${id}" not found!`);
		}

		return user;
	}

	async updateUser(id: string, updateUserDto: UpdateUserDto) {
		return await this.userRepository.update(id, updateUserDto);
	}

	async removeUser(id: string): Promise<void> {
		await this.userRepository.delete(id);
	}
}
