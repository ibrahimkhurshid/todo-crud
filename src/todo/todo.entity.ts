import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @Column()
    done: boolean

}