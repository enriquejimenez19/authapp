import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.profile.subscribe(profile => (this.profile = profile));
  }

}
