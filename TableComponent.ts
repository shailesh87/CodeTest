import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Customer List</h1>
    
		<table >
<tr><td>ID</td><td>Name</td><td>Action</td></tr>
<tr *ngFor="let item of data"><td>{{item.id}}</td><td>{{item.name}}</td><td><button (click)="deleteRow(item.id)">Remove</button></td></tr>
</table>
  `,
})
export class TableComponent {
		
    data= [{
    id:1,
		name: "AA"
    },
{
    id:2,
		name: "BB"
    },
    {
    id:3,
		name: "CC"
    },
    {
    id:4,
		name: "DD"
    },
    {
    id:5,
		name: "EE"
    },
    {
    id:6,
		name: "FF"
    }]
    
    deleteRow(id) {
   this.data = this.data.filter(function( obj ) {
  return obj.id !== id;
});
    	
    }
}
