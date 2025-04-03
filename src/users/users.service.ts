import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // Validasi eksplisit untuk nama
      if (!createUserDto.nama || createUserDto.nama.trim() === '') {
        throw new BadRequestException('Nama tidak boleh kosong');
      }

      // Pastikan data siap untuk disimpan
      const userData = {
        ...createUserDto,
        nama: createUserDto.nama.trim(), // Trim nama untuk menghindari spasi kosong
      };

      const user = this.usersRepository.create(userData);
      const savedUser = await this.usersRepository.save(user);
      console.log('User berhasil disimpan:', savedUser);
      return savedUser;
    } catch (error) {
      console.error('Error saat menyimpan user:', error);
      throw error;
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User dengan ID ${id} tidak ditemukan`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }

} 