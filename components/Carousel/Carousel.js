class Carousel {
  constructor(car) {
    this.car = car;
    this.leftButon = this.car.querySelector('.left-button');
    this.rightButton = this.car.querySelector('.left-button');
    this.img = this.car.querySelectorAll('img');

    this.index = 0;

    this.leftButon.addEventListener('click', () => this.left());
    this.rightButon.addEventListener('click', () => this.right());
    this.img[0].style.display = 'block';
  }
  left() {}

  right() {}
}

let carousel = document
  .querySelectorAll('.carousel')
  .forEach(car => new Carousel(car));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
