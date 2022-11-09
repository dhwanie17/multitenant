"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTenants1638963391898 = void 0;
class AddTenants1638963391898 {
    constructor() {
        this.name = "AddTenants1638963391898";
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE "public"."tenants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_a920abe6f6dd7764ee0f8108f57" PRIMARY KEY ("id"))');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE "public"."tenants"');
    }
}
exports.AddTenants1638963391898 = AddTenants1638963391898;
//# sourceMappingURL=1638963391898-AddTenants.js.map