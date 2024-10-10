import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todos1'})
export class Todo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}