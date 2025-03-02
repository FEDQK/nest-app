import { MigrationInterface, QueryRunner } from "typeorm";

export class CoffeeRefactor1740935996781 implements MigrationInterface {
    name = 'CoffeeRefactor1740935996781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
    }

}
