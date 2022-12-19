// objet qui contient tout ce qui est lié à l'utilisation des listes
const list = {
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
  },
  showAddModal: function() {
    const addModal = document.getElementById('addListModal');
    addModal.classList.add('is-active');
  },
  hideModal: function() {
    const addModal = document.getElementById('addListModal');
    addModal.classList.remove('is-active');
  },
};
