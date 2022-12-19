// objet qui représente l'application
// servira à initialiser les différentes fonctionnalités
const app = {
  init: function () {
    list.addListenerToActions();
    card.addListenerToActions();
  },
};

// la métode init sera executée quand l'événement DOMContentLoaded aura lieu cad
// quand le html aura été lu en entier par le navigateur
document.addEventListener('DOMContentLoaded', app.init);
