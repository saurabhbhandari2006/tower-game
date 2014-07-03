function swapImage() {
    theImages = new Array("images/card.png","images/card2.png","images/card3.png");
    whichImage = Math.floor(Math.random()*theImages.length);
    document.write('<IMG SRC="' +theImages[whichImage]+ '">');

}
