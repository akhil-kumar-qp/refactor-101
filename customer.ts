import { CustomerType } from "./enums/customer-type.enum";
import { getDiscountByCustomerType } from "./util/discount.util";

export class Customer {
  private readonly name: string;
  private readonly type: CustomerType;

  constructor(name: string, type: CustomerType) {
    this.name = name;
    this.type = type;
  }

  getCustomerName(): string {
    return this.name;
  }

  getCustomerDiscount(): number {
    return getDiscountByCustomerType(this.type);
  }
}
