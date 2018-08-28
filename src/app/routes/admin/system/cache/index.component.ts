
import { Component, ViewChild, Injector, OnInit, OnDestroy } from '@angular/core';

import { ParentIndexControl } from '@core';

@Component({
  selector: 'app-system-cache',
  templateUrl: `./index.component.html`,
  styleUrls: [`./index.component.less`]
})
export class CacheComponent extends ParentIndexControl implements OnInit, OnDestroy {

  iconType = 'delete';

  constructor(protected injector: Injector) {
    super(injector);
    super.__init('/public/cache_clear', '');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  clearCache() {
    this.pageData$.cache = this.httpSrv.post(this.primaryURL).subscribe(
      (result: any) => {
        this.iconType = 'success';
        console.log(result);
      });
  }

}
