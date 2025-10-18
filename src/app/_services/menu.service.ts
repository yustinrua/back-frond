import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs"
import type { MenuItem } from "../_models/menuItem"

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private baseUrl = "http://localhost:8081/servicesRest/WsColegio"

 constructor(private http: HttpClient) {}


  getMenuItems() {
    return this.http.get<MenuItem[]>(`${this.baseUrl}/getMenuItems`).pipe(
      map((menuItems) => {
        return menuItems
      }),
    )
  }
}
