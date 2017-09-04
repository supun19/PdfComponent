import {Component, Input, ElementRef, AfterContentInit, Renderer2, ViewChild} from '@angular/core';
import './pdf.js'


declare var PDFJS: any;


@Component({
  selector: 'pdf',
  template: `
    <div >
      hello world
    </div>
    <canvas  id="the-canvas"></canvas>
  `
})

export class PdfComponent implements AfterContentInit {
  @ViewChild('myId') myId: ElementRef;

  pdfjsObj: any;
  url = 'app/pdf/pdf.worker.js';
  pdf = 'app/pdf/php_tutorial.pdf'
  element:any;


  constructor(private myElement:ElementRef){
    PDFJS.workerSrc = this.url
    this.pdfjsObj =  PDFJS.getDocument(this.pdf);
    this.loadPdf(this.pdfjsObj);


  }
  ngAfterContentInit() {


  }

  loadPdf(ob :any){
    // ob.promise.then(function(pdf:any) {
    //
    //   console.log('PDF loaded');
    //
    //   // Fetch the first page
    //   var pageNumber = 1;
    //   pdf.getPage(pageNumber).then(function(page:any) {
    //     console.log('Page loaded');
    //
    //     var scale = 1.5;
    //     var viewport = page.getViewport(scale);
    //
    //     // Prepare canvas using PDF page dimensions
    //     var canvas = this.myElement.getElementById('the-canvas');
    //     var context = canvas.getContext('2d');
    //     canvas.height = viewport.height;
    //     canvas.width = viewport.width;
    //
    //     // Render PDF page into canvas context
    //     var renderContext = {
    //       canvasContext: context,
    //       viewport: viewport
    //     };
    //     var renderTask = page.render(renderContext);
    //     renderTask.then(function () {
    //       console.log('Page rendered');
    //     });
    //   });
    // }, function (reason:any) {
    //   // PDF loading error
    //   console.error(reason);
    //
    // });

  }

}
