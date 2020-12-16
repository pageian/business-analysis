import {of} from "rxjs";

export class UserRevenue {
  uid: string;
  date: Date;
  office_costs: number;
  wage_costs: number;
  marketing_costs: number;
  other_costs: number;
  operation_costs: number;
  revenue: number;

  constructor() {
    this.uid = "";
    this.date = new Date();
    this.office_costs = 0;
    this.wage_costs = 0;
    this.marketing_costs = 0;
    this.other_costs = 0;
    this.operation_costs = 0;
    this.revenue = 0;
  }

  // Adds data to empty User object
  setData(uid: string, date: Date, office_costs: number, wage_costs: number, marketing_costs: number, other_costs: number, operation_costs: number, revenue: number) {
    this.uid = uid;
    this.date = date;
    this.office_costs = office_costs;
    this.wage_costs = wage_costs;
    this.marketing_costs = marketing_costs;
    this.other_costs = other_costs;
    this.operation_costs = operation_costs;
    this.revenue = revenue;
  }

  setUID(uid: string){ this.uid = uid; }
  getUID(): string { return this.uid; }

  setDate(date: Date) { this.date = date; }
  getDate(): Date { return this.date; }

  setOfficeCost(office_costs: number) { this.office_costs = office_costs; }
  getOfficeCost(): number { return this.office_costs; }

  setWageCost(wage_costs: number) { this.wage_costs = wage_costs; }
  getWageCost(): number { return this.wage_costs; }

  setMarketingCost(marketing_costs: number) { this.marketing_costs = marketing_costs; }
  getMarketingCost(): number { return this.marketing_costs; }

  setOtherCost(other_costs: number) { this.other_costs = other_costs; }
  getOtherCost(): number { return this.other_costs; }

  setOperationCost(operation_costs: number) { this.operation_costs = operation_costs; }
  getOperationCost(): number { return this.operation_costs; }

  setRevenue(revenue: number) { this.revenue = revenue; }
  getRevenue(): number { return this.revenue; }


}
