import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	// async signUp(email: string, pass: string): Promise<any> {
	// 	const user = await this.usersService.findOneUser(email);
	// 	if (user?.password !== pass) {
	// 		throw new UnauthorizedException();
	// 	}
	// 	const { password, ...result } = user;
	// 	// TODO: Generate a JWT and return it here
	// 	// instead of the user object
	// 	return result;
	// }

	async signUp(email: any, pass: any) {
		const user = await this.usersService.findOneUser(email);
		if (user?.password !== pass) {
			throw new UnauthorizedException();
		}
		const payload = { sub: user.id, email: user.email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
