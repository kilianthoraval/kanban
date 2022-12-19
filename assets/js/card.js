// objet qui contient tout ce qui est lié à l'utilisation des card
const card = {
  addModal: document.getElementById('addCardModal'),
  addListenerToActions: function() {
    // Ouverture de la modale au clic sur les boutons
    const addCardButtons = document.querySelectorAll('.add-card');
    addCardButtons.forEach((button) => {
      button.addEventListener('click', card.showAddModal);
    });

    // Fermeture au clic sur les boutons
    const closeButtons = card.addModal.querySelectorAll('.close');
    closeButtons.forEach((button) => {
      button.addEventListener('click', card.hideModal);
    });
  },
  showAddModal: function(event) {
    card.addModal.classList.add('is-active');
    // je pars de currentTarget qui représente l'élement cliqué
    // via closest je cible un ancetre
    const list = event.currentTarget.closest('.panel');
    // les attributs data-qqch présents dans le html sont accessibles dans la propriété dataset en camelCase en JS
    const listId = list.dataset.listId;
    const input = document.getElementById('list-id-hidden');
    input.value = listId;
  },
  hideModal: function() {
    card.addModal.classList.remove('is-active');
  },
};

// il faut gérer le formulaire dans la modale
// il faut tester et gérer l'ajout de cartes dans les nouvelles listes