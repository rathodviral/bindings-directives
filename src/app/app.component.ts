import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Image Viewer';
  selectedIndex: number = 0;
  images: File[] = [];
  imagePath: any = '';

  ngOnInit() {}

  private renderImage() {
    let reader = new FileReader();
    this.imagePath = this.images;
    reader.readAsDataURL(this.images[this.selectedIndex]);
    reader.onload = (e) => {
      this.imagePath = reader.result;
    };
  }

  preview(filesData: File[]) {
    if (filesData.length === 0) {
      return;
    }
    this.images = filesData;
    this.selectedIndex = 0;
    this.renderImage();
  }

  forward() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
    this.renderImage();
  }

  back() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
    this.renderImage();
  }
}
