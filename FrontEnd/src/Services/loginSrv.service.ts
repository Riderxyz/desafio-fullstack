import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class LoginSrvService {

  constructor(public http: HttpClient, public route: Router) { }

  login(token) {
  }
}