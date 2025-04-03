import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      // Validasi tambahan untuk nama
      if (!createUserDto.nama || createUserDto.nama.trim() === '') {
        throw new BadRequestException('Nama tidak boleh kosong');
      }

      const user = await this.usersService.create(createUserDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'User berhasil dibuat',
        data: user
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: 'Gagal membuat user',
        error: error.message
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Berhasil mengambil semua data user',
        data: users
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
        message: 'Gagal mengambil data user',
        error: error.message
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(+id);
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `Berhasil mengambil data user dengan ID ${id}`,
        data: user
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        success: false,
        message: `Gagal mengambil data user dengan ID ${id}`,
        error: error.message
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.usersService.update(+id, updateUserDto);
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `User dengan ID ${id} berhasil diperbarui`,
        data: updatedUser
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `Gagal memperbarui user dengan ID ${id}`,
        error: error.message
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(+id);
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: `User dengan ID ${id} berhasil dihapus`
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        success: false,
        message: `Gagal menghapus user dengan ID ${id}`,
        error: error.message
      };
    }
  }
}