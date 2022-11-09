import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company } from "./company.entity";
import { CompanyService } from "./company.service";

@Controller("company")
export class CompanyController {
  constructor(private readonly companysService: CompanyService) {}

  @Post()
  create(@Body() createCatDto: CreateCompanyDto): Promise<Company> {
    return this.companysService.create(createCatDto);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companysService.findAll();
  }
}
