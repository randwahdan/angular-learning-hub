import { Directive, input } from "@angular/core";


@Directive({
  selector: 'a[appSafeLink]',  // a >> to apply this directive to any <a>
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {
  queryParam =input('myapp' , {alias: 'appSafeLink'});
  constructor(){
    console.log("Hi");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
}
}
