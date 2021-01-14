import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  items: Product[];

  @ViewChild("alert") alert;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(
      (data: any) => this.items = data
    );
  }

  delete(id: number){
    this.service.delete(id).subscribe(
      (data: any) => this.callbackSuccess(data.message),
      (error: any) => this.callbackError(error)
    );
  }

  private callbackSuccess(message: string){
    this.alert.type = "success";
    this.alert.message = message;
    this.getAll();
  }

  private callbackError(error: any){
    this.alert.type = "danger";
    this.alert.message = "Ocorreu um problema a excluir: " + error.error.message;
    console.log(error);
  }

}
