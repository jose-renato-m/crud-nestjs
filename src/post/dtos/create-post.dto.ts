import { PostCategory } from '../enums';
import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreatePostDto {

  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsString()
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}