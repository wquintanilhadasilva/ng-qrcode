import { Component } from '@angular/core';
import { NgxScannerQrcodeService, SelectedFiles } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrcode';



  /**
   * Properties
   * CanvasRenderingContext2D
   * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
   */
  public config: Object = {
    text: { fillStyle: 'red' },
    frame: { strokeStyle: 'red' }
  };

  public selectedFiles: SelectedFiles[] = [];

  constructor(private qrcode: NgxScannerQrcodeService) { }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) =>  console.log(fn + ': ' + res));
  }

  public onSelects(files: any) {
    this.qrcode.toBase64(files, this.selectedFiles).subscribe(res => this.selectedFiles = res);
  }

}
