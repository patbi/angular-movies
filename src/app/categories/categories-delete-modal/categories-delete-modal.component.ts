import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-categories-delete-modal',
  templateUrl: './categories-delete-modal.component.html',
  styleUrls: ['./categories-delete-modal.component.scss']
})
export class CategoriesDeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoriesDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
