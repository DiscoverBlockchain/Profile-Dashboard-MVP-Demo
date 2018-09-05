import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    copyright: Date = new Date();
}
