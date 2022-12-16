
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
    closeButton.forEach(element => {
      element.addEventListener('click', app.hideModals)     
    });
    // let form = document.getElementById('is-success');
    // form.addEventListener('submit', app.handleAddListForm);

    app.getForm = document.querySelector('.modal-card form');
    app.getForm.addEventListener('submit', app.handleAddListForm)
  },

  showAddListModal: function () {
    let modal = document.getElementById('addListModal');
    modal.classList.add('is-active');
  },

  hideModals: function () {
    let closeModal = document.getElementById('addListModal');
    closeModal.classList.remove('is-active');
  },

  handleAddListForm: function (event) {
    event.preventDefault();
    formData = new formData(app.getForm);
    console.log(formData);

  }


};


// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener('DOMContentLoaded', app.init );