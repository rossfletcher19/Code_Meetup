import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
  providers: [AuthenticationService]
})
export class SignInOutComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(public authService: AuthenticationService, private modalService: BsModalService) { }
  
  ngOnInit() { }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
