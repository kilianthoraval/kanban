
// on objet qui contient des fonctions
const app = {

  // fonction d'initialisation, lancée au chargement de la page
  init: function () {
    console.log('app.init !');
    app.addListenerToAction();
  },

  addListenerToAction: function () {
    let button = document.getElementById('addListButton');
    button.addEventListener('click', app.showAddListModal);
  },

  showAddListModal: function () {
    let modal = document.getElementById('addListModal');
    modal.classList.add('is-active');
  }

};


// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener('DOMContentLoaded', app.init );