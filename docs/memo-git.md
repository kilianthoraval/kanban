# Procédure git pour travailler en multi remote cette saison

## A faire 1 première fois

**Générer votre dépot nominatif personnel et ajouter la remote de correction**

- Cloner votre dépot
  - `git clone monDepotPerso`
- Ajouter la remote de correction
  - `git remote add correction git@github.com:O-clock-Moai/S07-okanban-front-alexisOclock.git`

## A faire au quotidien

**Récupérer si on veut la correction et coder dans une branche par jour**

- `git checkout master` -> on repasse sur master pour récupérer la correction
- On récupère la correction `git pull --no-edit --allow-unrelated-histories -X theirs correction master`
  - On récupère la branche distante master de mon dépot de correction. Les options spécifiées ici permettent de dire qu'on garde les modifs entrantes en cas de conflit et qu'on ne se préoccupe pas du fait que l'historique de commit de mon dépot ne coïncide pas forcemment avec votre dépot local.

Puis tous les jour pour travailler

- `git checkout -b nom-branche` pour créer une branche et se placer dessus pour travailler
- Ou `git checkout nom-branche` pour se placer sur une autre branche déjà créée plus tôt