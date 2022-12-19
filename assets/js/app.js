// objet qui contient tout ce qui est lié à l'utilisation des listes
const list = {
  addListenerToActions: function() {
    const addListButton = document.getElementById('addListButton');
    addListButton.addEventListener('click', list.showAddModal);
  },
  showAddModal: function() {
    const addModal = document.getElementById('addListModal');
    addModal.classList.add('is-active');
  },
};

// objet qui contient tout ce qui est lié à l'utilisation des card
const card = {};

// objet qui représente l'application
// servira à initialiser les différentes fonctionnalités
const app = {
  init: function () {
    list.addListenerToActions();
  },
};

// la métode init sera executée quand l'événement DOMContentLoaded aura lieu cad
// quand le html aura été lu en entier par le navigateur
document.addEventListener('DOMContentLoaded', app.init);
