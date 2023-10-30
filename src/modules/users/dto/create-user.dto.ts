import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
	id: string;

	@IsNotEmpty()
	firstname: string;

	@IsNotEmpty()
	lastname: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;

	@IsNotEmpty()
	confirmpassword: string;
}
