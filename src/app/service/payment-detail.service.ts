import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string = environment.apiBaseUrl + '/PaymentDetail'
  listdata:PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail()
  formSubmitted: boolean = false;
  constructor(private httpclient:HttpClient) { }

List ()
{
    this.httpclient.get(this.url).subscribe({next:data => {
      console.log(data);
      this.listdata = data as PaymentDetail[];
    },
    error:err=> { console.log(err)}
  })
}
postPaymentDetail() {
  return this.httpclient.post(this.url, this.formData)
}

putPaymentDetail() {
  return this.httpclient.put(this.url + '/' + this.formData.paymentCardDetailId, this.formData)
}


deletePaymentDetail(id: number) {
  return this.httpclient.delete(this.url + '/' + id)
}


resetForm(form: NgForm) {
  form.form.reset()
  this.formData = new PaymentDetail()
  this.formSubmitted = false
}
}
