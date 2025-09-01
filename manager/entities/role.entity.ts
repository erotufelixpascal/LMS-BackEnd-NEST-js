import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity'; // Adjust path

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string; // e.g., 'branch_manager', 'loan_officer'

  @Column({ nullable: true })
  description: string; // e.g., 'Manages branch operations'

  @OneToMany(() => User, (user) => user.role)
  users: User[]; // Links to users with this role
}