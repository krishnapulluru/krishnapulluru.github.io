import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

    @Output() newIngredientAddEvent = new EventEmitter<Ingredient>();
    @ViewChild('itemName') itemNameRef: ElementRef;
    @ViewChild('itemAmount') itemAmountRef: ElementRef;

    private localData = [];

    constructor() { }

    ngOnInit(): void {
    }

    onAddItem() {
        let itemName: string = this.itemNameRef.nativeElement.value;
        let itemAmount: number = this.itemAmountRef.nativeElement.value;

        if (itemName === null || itemName === undefined || itemName === "") {
            alert("Please enter item name");
            this.itemNameRef.nativeElement.focus();
        } else if (itemAmount === null || itemAmount === undefined || itemAmount === 0) {
            alert("Please enter item amount");
            this.itemAmountRef.nativeElement.focus();
        } else {
            const newIngredent = new Ingredient(new Date().getTime().toString(16), itemName, itemAmount, new Date().toDateString())
            this.newIngredientAddEvent.emit(newIngredent);

            this.itemNameRef.nativeElement.value = "";
            this.itemAmountRef.nativeElement.value = "";
        }

    }

}
