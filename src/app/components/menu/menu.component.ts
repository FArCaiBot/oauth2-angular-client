import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  authorized_uri = environment.authorize_uri;
  params: any = {
    client_id: environment.client_id,
    redirect_uri: environment.redirect_uri,
    scope: environment.scope,
    response_type: environment.response_type,
    response_mode: environment.response_mode,
    code_challenge_method: environment.code_challenge_method,
    code_challenge: environment.code_challenge,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    const httpParams = new HttpParams({ fromObject: this.params });
    const codeUrl = this.authorized_uri + httpParams.toString();
    location.href = codeUrl;
  }
}
