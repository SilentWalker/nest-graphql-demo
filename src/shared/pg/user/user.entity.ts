import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { Post } from '../post/post.entity'
import { Comment } from '../comment/comment.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Post, posts => posts.author)
  posts: Post

  @OneToMany(type => Comment, comments => comments.author)
  comments: Comment

  // @Column('timestamp with time zone', {
  //   nullable: false,
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // @CreateDateColumn('timestamp with time zone')
  // createdAt: Date

  // @Column('timestamp with time zone', {
  //   nullable: false,
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // @UpdateDateColumn('timestamp with time zone')
  // updatedAt: Date
}
