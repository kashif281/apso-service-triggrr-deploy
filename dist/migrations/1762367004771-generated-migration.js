"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedMigration1762367004771 = void 0;
class GeneratedMigration1762367004771 {
    constructor() {
        this.name = 'GeneratedMigration1762367004771';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."test-customer_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-customer" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "country" text NOT NULL, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "zipCode" text NOT NULL, "phoneNumber" text, "createdBy" text, "status" "public"."test-customer_status_enum" NOT NULL DEFAULT 'Active', CONSTRAINT "PK_a22cff6f86fb957823c8c121705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."test-facility_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-facility" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "contactName" text, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "zipCode" text NOT NULL, "status" "public"."test-facility_status_enum" NOT NULL DEFAULT 'Active', "weight" text NOT NULL, "customerId" integer, CONSTRAINT "PK_6873adb5994ed222f1e21134b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, CONSTRAINT "unique_survey_title" UNIQUE ("title"), CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_af2eef92c9425e355b20bd941f" ON "survey" ("title") `);
        await queryRunner.query(`CREATE TABLE "respondent" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying(255), CONSTRAINT "unique_respondent_email" UNIQUE ("email"), CONSTRAINT "PK_7f6ed69e9a3a8a07072c37b2c2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "response" ("id" SERIAL NOT NULL, "question_id" uuid NOT NULL, "response_value" text NOT NULL, "respondent_id" uuid NOT NULL, CONSTRAINT "PK_f64544baf2b4dc48ba623ce768f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7bacdf51c4b368d222e8568a75" ON "response" ("respondent_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_102206f16e641a8e11565aa6b0" ON "response" ("question_id") `);
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "survey_id" uuid NOT NULL, "question_text" text NOT NULL, "response_type" character varying(255) NOT NULL, CONSTRAINT "unique_question_in_survey" UNIQUE ("survey_id", "question_text"), CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a74e5e8dfbf68d7d1cd39c8c9f" ON "question" ("survey_id") `);
        await queryRunner.query(`ALTER TABLE "test-facility" ADD CONSTRAINT "FK_019deaff3c8726ce53cf857aebf" FOREIGN KEY ("customerId") REFERENCES "test-customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test-facility" DROP CONSTRAINT "FK_019deaff3c8726ce53cf857aebf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a74e5e8dfbf68d7d1cd39c8c9f"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_102206f16e641a8e11565aa6b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7bacdf51c4b368d222e8568a75"`);
        await queryRunner.query(`DROP TABLE "response"`);
        await queryRunner.query(`DROP TABLE "respondent"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_af2eef92c9425e355b20bd941f"`);
        await queryRunner.query(`DROP TABLE "survey"`);
        await queryRunner.query(`DROP TABLE "test-facility"`);
        await queryRunner.query(`DROP TYPE "public"."test-facility_status_enum"`);
        await queryRunner.query(`DROP TABLE "test-customer"`);
        await queryRunner.query(`DROP TYPE "public"."test-customer_status_enum"`);
    }
}
exports.GeneratedMigration1762367004771 = GeneratedMigration1762367004771;
//# sourceMappingURL=1762367004771-generated-migration.js.map