import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDTO } from './register-user-dto';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signup(registerUserDTO: RegisterUserDTO): Promise<import("../users/user.entity").User>;
    signIn(signInDTO: RegisterUserDTO): Promise<{
        access_token: string;
    }>;
}
