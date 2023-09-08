import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDTO } from './register-user-dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signin(signInDTO: RegisterUserDTO): Promise<{
        access_token: string;
    }>;
}
