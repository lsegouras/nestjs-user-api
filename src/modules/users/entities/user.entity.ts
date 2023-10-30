import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
} from 'typeorm';

@Entity({
	name: 'users',
})
@Unique(['email'])
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ nullable: false, type: 'varchar', length: 50 })
	firstname: string;

	@Column({ nullable: false, type: 'varchar', length: 50 })
	lastname: string;

	@Column({ nullable: false, type: 'varchar', length: 50 })
	email: string;

	@Column({ nullable: false, type: 'varchar', length: 50 })
	password: string;

	@Column({ nullable: false, type: 'varchar', length: 50 })
	confirmpassword: string;

	// constructor(props: {
	// 	firstname: string;
	// 	lastname: string;
	// 	email: string;
	// 	password: string;
	// 	confirmpassword: string;
	// }) {
	// 	Object.assign(this, props);
	// }
}
