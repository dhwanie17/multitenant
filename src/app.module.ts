import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TenantsModule } from "./modules/public/tenants/tenants.module";
import { TenancyModule } from "./modules/tenancy/tenancy.module";
import { CompanyModule } from "./modules/tenanted/company/company.module";

import * as ormconfig from "./orm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TenantsModule,
    TenancyModule,
    CompanyModule,
  ],
})
export class AppModule {}
