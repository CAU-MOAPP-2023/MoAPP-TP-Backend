import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FamilyMember } from './family-member.entity';
import { CreateUserDto } from '../../domain/user/dto/request/create-user.dto';

@Entity('user', { schema: 'family_app_db' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Email', nullable: false, length: 50, unique: true })
  email: string;

  @Column('varchar', { name: 'PW', nullable: false, length: 25 })
  password: string;

  @Column('varchar', { name: 'Username', nullable: false, length: 50 })
  username: string;

  @Column('varchar', { name: 'Nickname', nullable: true, length: 50 })
  nickname: string | null;

  @Column('int', { name: 'Age', nullable: false })
  age: number;

  @Column('int', { name: 'Gender', nullable: false })
  gender: number;

  @OneToMany(() => FamilyMember, (familyMember) => familyMember.user)
  familyMembers: FamilyMember[];
}
