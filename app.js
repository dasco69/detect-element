class Detect {
  constructor(elem) {
    this.elem = elem;
  }

  scroll() {
    $(window).scroll(() => {
      //Le Haut de l'élement
      let topEl = this.elem.offsetTop;
      //Le Bas de l'émément
      let bottomEl = this.elem.clientHeight + this.elem.offsetTop;
      //Le Haut de la page
      let topWin = window.scrollY;
      //Le Bas de la page
      let bottomWin = window.innerHeight + window.scrollY;
      // Si le bas de la page et supérieur au haut de l'élément
      //et si
      //  Le bas de l'élément et inférieur au haut de la page
      //Alors
      if (bottomWin > topEl && bottomEl > topWin) {
        console.log("Visible!!!");
      } else {
        //Sinon afficher
        console.log("Pas visible!!!");
      }
    });
  }
}

//Déclaration de l'object Detect avec les paramètre d'entrée
let app = new Detect(document.getElementById("app"));
// On déclare la méthode Scoll()
let appScroll = app.scroll();

let test = new Detect(document.getElementById("test"));
let testScroll = test.scroll();
