import { PostCategory } from '../enums';
import { IsArray, IsBoolean, IsEnum, IsString } from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString'

export class CreatePostDto {

  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsEnum(PostCategory, {
    message: `Opção inválida. As opções corretas são ${ EnumToString(PostCategory) }`
  })
  category: PostCategory;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  status: boolean;
}