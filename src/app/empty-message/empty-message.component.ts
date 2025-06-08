import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-message',
  templateUrl: './empty-message.component.html',
  styleUrl: './empty-message.component.scss'
})
export class EmptyMessageComponent {
  @Input() icon: string = ''
  @Input() message: string = ''
}
