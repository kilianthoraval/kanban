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
