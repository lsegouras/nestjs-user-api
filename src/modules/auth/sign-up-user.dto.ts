import { plainToClass } from 'class-transformer';
import { User } from 'src/modules/users/entities/user.entity';

export class SignUpUserDto {
	static password(email: (email: any, password: any) => void, password: any) {
		throw new Error('Method not implemented.');
	}
	static email(email: any, password: any) {
		throw new Error('Method not implemented.');
	}
	email: string;
	password: string;

	static toClass(dto: SignUpUserDto) {
		return plainToClass(User, dto);
	}
}
