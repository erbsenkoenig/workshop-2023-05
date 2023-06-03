import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-architects-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
