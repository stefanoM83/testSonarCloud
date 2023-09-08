import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from 'src/auth/register-user-dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(registerUserDTO: RegisterUserDTO): Promise<User>;
    findOne(id: number): Promise<User>;
    findByUsername(username: string): Promise<User>;
}
