import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field({ nullable: true })
  content?: string

  @Field()
  creationDate: Date

  @Field(type => [String])
  ingredients: string[]
}
