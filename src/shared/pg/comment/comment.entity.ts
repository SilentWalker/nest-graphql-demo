import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { Post } from '../post/post.entity'
import { User } from '../user/user.entity'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @OneToMany(type => User, author => author.comments)
  author: User

  @Column('text')
  content: string

  @ManyToOne(type => Post, post => post.comments)
  post: Post

  @ManyToOne(type => Comment, comment => comment.childComments)
  parentComment: Comment

  @OneToMany(type => Comment, comment => comment.parentComment)
  childComments: Comment

  // @CreateDateColumn('timestamp with time zone')
  // createdAt: Date

  // @UpdateDateColumn('timestamp with time zone')
  // updatedAt: Date
}
