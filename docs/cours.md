# S07

En S07 on a remis notre casquette de développeur frontend.

On utilise des langages interprétés dans le navigateur, HTML pour le fond, CSS pour la forme et JS pour les intéractions.

Grâce à JS dans le navigateur on peut réagir aux intéractions de l'utilisateur pour faire évoluer le DOM.

Notre boulôt en tant que dev backend était de préparer les données. En fonction d'une demande, on traite la donnée et on construit une réponse.
En tant que dev front notre boulot est de construire l'interface utilisateur, le moyen facilitant la consultation et l'intéraction avec nos données.

Avant la s6 l'utilisateur pouvait soumettre des formulaire ou cliquer sur des liens qui généraient de nouvelles requetes HTTP, le serveur renvoyait une réponse adaptée en HTML.

En S6/7 on travaille en mode API. Le back sait gérer des opérations sur la BDD et nous expose des endpoints pour demander ces opérations. Il nous répond du JSON.

En front, on ne va plus génèrer de requete HTTP par défaut en réponse aux intéractions. On fait des SPA (single page application). Une page qu'on n'actualise pas. On décrira en javascript comment faire évoluer le DOM en réponse à des intéractions. Si on a besoin de faire persister ou de récupérer des choses de la BDD, on contactera l'api qui sait nous répondre via des reuetes HTTP émises depuis nos scripts JS en **ajax**. On utilisera la réponse json dans nos scripts comme source d'info pour alimenter notre interface.

## Nos objectifs principaux en front

- Cibler un élement / traverser le DOM
  - `document.getElementById('id')`
  - `document.querySelector('.selector')`
  - `document.querySelectorAll('.selector')`
  - `element.previousElementSibling`
  - `element.nextElementSibling`
  - `element.closest('.selector')`
- Créer des élements
  - `document.createElement('div')`
  - `template.content.cloneNode(true)`
  - `document.importNode(template.content, true);`
- Modifier des élements
  - `element.textContent`
  - `element.classList`
  - `element.style`
  - `element.setAttribute('nom', 'valeur')`
- Insérer des élements
  - `parent.appendChild(enfant);`
  - `voisin.before(nouveauVoisin);`
  - `voisin.after(nouveauVoisin);`
- Réagir à un événement
  - `element.addEventListener('click', funtion() {});`
  - `element.addEventListener('submit', funtion() {});`
  - `element.addEventListener('dblclick', funtion() {});`
- Récupérer les valeur d'un fomulaire
  - `inputElement.value`
  - `new FormData(formElement);`
- Utiliser le DOM pour écrire une donnée
  - les attributs custom data-*suffix* ou _dataset_
```js
// on prefixe nos attributs custom avec data-
// Ainsi ils seront automatiquement repris dans la propriété dataset de l'element dans un objet avec chaque propriété en camelCase
// <input data-test="toto" data-list-id="4">
document.querySelector('input').dataset; 
/* nous donne
{
  test: "toto",
  listId: "4",
}
*/
```
- Faire des requêtes HTTP en ajax
  - `fetch()`

## Exemples de fetch

### Par défaut, du get

```js
fetch('http://monapi.com/faitqqch');
```

### Possible de spécifier la méthode (POST, PATCH, PUT, ...)

On passe en 2nd argument un objet spécifiant la méthode et le corps de la requete

```js
fetch('http://monapi.com/faitqqch', {
  method: 'POST',
  body: data
});
```

### Utilisation de la valeur de retour

On travaille dans une fonction asynchrone pour pouvoir attendre le retour de nos promesses

```js
const fetchSomething = async function() {
  const response = await fetch('http://monapi.com/faitqqch');
  const body = await response.json();
  if (response.status === 200) {
      console.log(body);
  }
  else {
      console.error('Il y a eu un problème');
  }
}
```

### Gestion des erreurs avec try/catch

S'il y a eu un soucis l'api ne renverra peut etre pas nos données mais un message d'erreur. On peut alors jeter une erreur pour réagir de manière adapter

```js
const fetchSomething = async function() {
  try {
    const response = await fetch('http://monapi.com/faitqqch');
    const body = await response.json();
    if (response.status === 200) {
      console.log(body);
    }
    else {
      throw new Error(body);
    }
  } catch(error) {
    alert('Il y a eu un soucis');
    console.error(error);
  }
}
```

## CORS 

Attention par défaut on ne peut faire des requetes http via fetch que vers le même domaine que celui qui héberge les scripts executés dans le navigateur.

Si c'est pas le cas, si on veut envoyer des requetes http via fetch vers un autre domaine. Il faut que le serveur intérrogé spécifie sa politique de CORS

CORS signifie Cross Origin Ressource Sharing, on dirait en français une politique de partage de ressources entre les origine (les domaines)
