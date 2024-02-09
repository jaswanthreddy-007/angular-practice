import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
})
export class TextComponent {
  clicked = false;
  name = 'jaswanth';
  whenclicked() {
    this.clicked = true;
  }
  formData: any;

  constructor(private formDataService: FormDataService) {
    this.formData = this.formDataService.getFormData();
  }
}
