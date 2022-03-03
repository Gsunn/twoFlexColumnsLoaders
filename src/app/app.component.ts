import { Component, VERSION } from '@angular/core';
import {LoaderService} from './loader/loader.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private loaderService: LoaderService) {
  }

    /**
   * Show loader
   * @param type
   */
     public showLoader(type?:string): void {

      if(type) this.loaderService.showLoader(type);
      else this.loaderService.showLoader();

      //  console.log(type)
      // switch (type) {
      //   case 'first':
      //     this.loaderService.showLoader(type);
      //     break;
      //   case 'second':
      //     this.loaderService.showLoader(type);
      //     break;
      //   default:
      //    // this.loaderService.showLoader();
      //     break;
      // }
    }
  
    /**
     * Hide loader
     */
    public hideLoader(type?:string): void {
      // this.loaderService.hideLoader();
      switch (type) {
        case 'first':
          this.loaderService.hideLoader(type);
          break;
        case 'second':
          this.loaderService.hideLoader(type);
          break;
        default:
          this.loaderService.hideLoader();
          break;
      }
    }

}
