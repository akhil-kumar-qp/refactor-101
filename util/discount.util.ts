import { CustomerType } from "../enums/customer-type.enum";

export function getDiscountByCustomerType(customerType: CustomerType): number {
  switch (customerType) {
    case CustomerType.REGULAR:
      return 0.05;
    case CustomerType.PREMIUM:
      return 0.1;
    case CustomerType.VIP:
      return 0.2;
    default:
      return 0;
  }
}
