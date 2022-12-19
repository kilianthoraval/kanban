// objet qui contient tout ce qui est lié à l'utilisation des listes
const list = {
  addModal: document.getElementById('addListModal'),
  addListenerToActions: function() {
    // Ouverture de la modale au clic sur le bouton
    const addListButton = document.getElementById('addListButton');
    addListButton.addEventListener('click', list.showAddModal);

    // Fermeture au clic sur les boutons
    const closeButtons = document.querySelectorAll('.close');
    // for (const button of closeButtons) {
    //   button.addEventListener('click', list.hideModal);
    // }
    closeButtons.forEach((button) => {
      button.addEventListener('click', list.hideModal);
    });

    // création d'une liste à la soumission du formulaire
    // la méthode querySelector existe sur le document mais aussi sur un Element pour chercher dans une zone restreinte
    list.form = list.addModal.querySelector('form');
    list.form.addEventListener('submit', list.handleAddForm);
  },
  showAddModal: function() {
    list.addModal.classList.add('is-active');
  },
  hideModal: function() {
    list.addModal.classList.remove('is-active');
  },
  handleAddForm: function(event) {
    event.preventDefault();
    // on construit un objet contenant toutes les données du formulaires
    const formData = new FormData(list.form);
    // on peut accéder à une donnée via la méthode get à qui on passe en argument
    // le nom / la clé de la valeur à récupérer
    const listName = formData.get('name');
    list.makeInDOM(listName);
  },
  makeInDOM: function(name) {
    // On cible le template
    const template = document.querySelector("#list-template");

    // On clone le contenu du template
    const clone = document.importNode(template.content, true);

    // On reconfigure la copie
    const title = clone.querySelector('h2');
    title.textContent = name;

    // On insère la copie avant le voisin déjà présent
    const addColumn = document.getElementById('add-column');
    addColumn.before(clone);

    list.hideModal();
    list.resetForm();
  },
  resetForm: function() {
    list.form.reset();
  },
};
