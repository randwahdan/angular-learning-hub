import { Directive } from "@angular/core";


@Directive({
  selector: 'a[appSafeLink]',  // a >> to apply this directive to any <a>
  standalone: true
})
export class SafeLinkDirective {
constructor(){
  console.log("Hi");
}
}
