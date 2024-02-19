import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  themeClass = 'ag-theme-quartz';
  userList: any[] = [];
  ngOnInit(): void {
    this.getuser();
  }
  constructor(private http: HttpClient) {}

  defaultcoldef = {
    flex: 1,
    minwidth: 100,
  };
  getuser() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        console.log(res);
        this.userList = res;
      });
  }

 

  colDefs: ColDef[] = [
    {
      field: 'id',
      cellRenderer: (item: any) => {
        return 'emp ' + item.value;
      },
    },
    { field: 'name', filter: 'agNumberColumnFilter' },
    { field: 'username',editable:true},
    { field: 'email' },
  ];
}




// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ColDef } from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css'],
// })
// export class ContactComponent implements OnInit {
//   themeClass = 'ag-theme-quartz';
//   userList: any[] = [];
//   colDefs: ColDef[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getuser();
//   }

//   getuser() {
//     this.http
//       .get('https://jsonplaceholder.typicode.com/users')
//       .subscribe((res: any) => {
//         console.log(res);
//         this.userList = res;
//         this.colDefs = this.generateColDefs(res);
//       });
//   }

//   generateColDefs(data: any[]): ColDef[] {
//     if (data.length === 0) {
//       return [];
//     }

//     const firstItem = data[0];
//     return Object.keys(firstItem).map((key) => {
//       return {
//         field: key,
//         headerName: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the key for header
//         editable: key === 'username', // Example: make the 'username' column editable
//         // You can add additional customizations here based on your requirements
//       };
//     });
//   }
// }





