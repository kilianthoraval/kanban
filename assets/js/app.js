// objet qui représente l'application
// servira à initialiser les différentes fonctionnalités
const app = {
  init: function () {
    list.addListenerToActions();
    card.addListenerToActions();
    const app = {
      base_url: 'http://localhost:3001/',
      // autres propriétés

      async getListsFromAPI() {
        const response = await fetch(`${this.base_url}/lists`);
        const data = await response.json();

        // Parcours des données de la réponse
        for (const list of data) {
          // Création d'un élément HTML pour chaque liste
          const listElement = document.createElement('div');
          listElement.classList.add('list');

          // Ajout de l'attribut data-list-id avec l'ID de la liste
          listElement.setAttribute('data-list-id', list.id);

          // Autres manipulations de l'élément HTML ici
        }
      }
    };
}};
// la métode init sera executée quand l'événement DOMContentLoaded aura lieu cad
// quand le html aura été lu en entier par le navigateur
document.addEventListener('DOMContentLoaded', app.init);
