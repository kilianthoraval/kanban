
// on objet qui contient des fonctions
const app = {

  // fonction d'initialisation, lancée au chargement de la page
  init: function () {
    console.log('app.init !');
    app.addListenerToActions();
  },

  addListenerToActions: function () {
    let button = document.getElementById('addListButton');
    button.addEventListener('click', app.showAddListModal);
    let closeButton = document.querySelectorAll('.close');
    console.log(closeButton);
    closeButton.forEach(element => {
      element.addEventListener('click', app.hideModals)     
    });
  },

  showAddListModal: function () {
    let modal = document.getElementById('addListModal');
    modal.classList.add('is-active');
  },

  hideModals: function () {
    let closeModal = document.getElementById('addListModal');
    closeModal.classList.remove('is-active');
  }

};


// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener('DOMContentLoaded', app.init );