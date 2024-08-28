import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../service/payment-detail.service';
import { PaymentDetail } from '../service/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: ``
})
export class PaymentDetailComponent implements OnInit {
  constructor(public service:PaymentDetailService,private toastr:ToastrService){

  }
  ngOnInit(): void {
  this.service.List();
  }
  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  Refresh()
  {
   location.reload();
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deletePaymentDetail(id)
        .subscribe({
          next: res => {
            this.service.listdata = res as PaymentDetail[]
            this.toastr.error('Deleted successfully', 'Payment Detail Register')
          },
          error: err => { console.log(err) }
        })
  }

}
