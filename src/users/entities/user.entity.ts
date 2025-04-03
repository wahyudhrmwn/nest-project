import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  role: string;

  @Column({ nullable: false })
  nama: string
} 