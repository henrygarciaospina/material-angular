import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[]=[];
  constructor(private service: CustomerService) { }
  displayedColumns: string[] = ['Nombre(s)', 'Apellidos(s)', 'Num. Identificación', 'Num. Celular','acciones'];
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.service.getCustomers().subscribe(c=>{
      this.customers=c;
    })
    this.dataSource = new MatTableDataSource(this.customers);
  }
}
