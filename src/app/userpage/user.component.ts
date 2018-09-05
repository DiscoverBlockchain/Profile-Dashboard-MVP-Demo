import {Component} from '@angular/core';

declare var $: any;
declare var swal: any;

@Component({
    moduleId: module.id,
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent {

    public updateMessage() {
        swal({
            type: 'success',
            title: 'Good Job!',
            text: 'Your profile is updated!',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success'
        });
    }
}
