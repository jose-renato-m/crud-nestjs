import { CreatePostDto } from "./create-post.dto";
import { PartialType, OmitType } from '@nestjs/mapped-types';


export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['slug'] as const)
) {}