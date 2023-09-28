import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginDto, UpdateAuthDto, CreateUserDto, RegisterUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    register(registerDto: RegisterUserDto): Promise<LoginResponse>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<{
        _id: string;
        email: string;
        name: string;
        isActivate: boolean;
        roles: string[];
    }>;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
    getJWT(payload: JwtPayload): string;
}
