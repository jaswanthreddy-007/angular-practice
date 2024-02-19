import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { inc } from '../states/counter/counter.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from '../states/app.state';
import { selectCount, selectCounterState } from '../states/counter/counter.selector';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  count$: Observable<number>;

  constructor(
    private formDataService: FormDataService,
    private store: Store<appstate>
  ) {
    this.count$ = this.store.select(selectCount);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
    };

    this.formDataService.setFormData(formData);
    console.log(nameInput);
    console.log(emailInput);
  }
  increment() {
    this.store.dispatch(inc());
  }
}
