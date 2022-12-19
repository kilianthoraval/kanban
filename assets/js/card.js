// objet qui contient tout ce qui est lié à l'utilisation des card
const card = {
  addModal: document.getElementById('addCardModal'),
  addListenerToActions: function() {
    // Ouverture de la modale au clic sur les boutons
    const addCardButtons = document.querySelectorAll('.add-card');
    addCardButtons.forEach((button) => {
      button.addEventListener('click', card.showAddModal);
    });
    // // EXemple de délégation
    // document.body.addEventListener('click', (event) => {
    //   if (
    //       event.target.classList.contains('add-card') 
    //       || event.target.closest('.add-card')
    //   ) {
    //     card.showAddModal();
    //   }
    // });

    // Fermeture au clic sur les boutons
    const closeButtons = card.addModal.querySelectorAll('.close');
    closeButtons.forEach((button) => {
      button.addEventListener('click', card.hideModal);
    });


    // création d'une carte à la soumission du formulaire
    card.form = card.addModal.querySelector('form');
    card.form.addEventListener('submit', card.handleAddForm);
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
  handleAddForm: function(event) {
    event.preventDefault();
    // on construit un objet contenant toutes les données du formulaires
    const formData = new FormData(card.form);
    // on convertit notre objet FormData en objet simple
    // pratique ici pour passer toutes les infos du formulaire en une fois via un argument
    const objectData = Object.fromEntries(formData);
    card.makeInDOM(objectData);
  },
  makeInDOM: function(data) {
    // On cible le template
    const template = document.querySelector("#card-template");

    // On clone le contenu du template
    const clone = document.importNode(template.content, true);

    // On reconfigure la copie
    const title = clone.querySelector('.card-title');
    title.textContent = data.name;

    // On insère la copie à la fin du parent liste
    // on cible la liste qui nous intéresse via un selecteur d'attribut ici (entre crochets)
    const parent = document.querySelector(`.panel[data-list-id="${data.list_id}"] .panel-block`);
    parent.appendChild(clone);

    card.hideModal();
    card.resetForm();
  },
  resetForm: function() {
    card.form.reset();
  },
};

// il faut tester et gérer l'ajout de cartes dans les nouvelles listes