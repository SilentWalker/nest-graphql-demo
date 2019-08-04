import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Comment } from '../comment/comment.entity'
import { User } from '../user/user.entity'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @ManyToOne(type => User, author => author.posts)
  author: User

  @Column('text')
  content: string

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment

  // @CreateDateColumn('timestamp with time zone')
  // createdAt: Date

  // @UpdateDateColumn('timestamp with time zone')
  // updatedAt: Date
}
