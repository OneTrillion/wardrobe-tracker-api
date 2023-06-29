import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Clothing {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    color!: string

    //TODO: Enum?
    @Column()
    category!: string

}
