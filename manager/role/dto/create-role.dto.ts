import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsArray, IsOptional } from "class-validator";

export class CreateRoleDto {

    @ApiProperty({
        description: 'The name of the role',
        example: 'admin',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The description of the role',
        example: 'Admin role',
    })
    @IsString()
    @IsNotEmpty()
    description: string;
    
    @ApiProperty({
        example: ['create_loan', 'approve_loan'],
        description: 'List of permissions assigned to the role',
        required: false,
      })
      @IsOptional()
      @IsArray()
      permissions?: string[];
}
