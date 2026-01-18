# 💧 Water Tracker

Une application web moderne et légère pour suivre son hydratation quotidienne.  
Ce projet a été réalisé dans le cadre d'un apprentissage approfondi des concepts modernes d'Angular (v17+).

🔗 **Démo en ligne :** [Voir l'application](https://TON_PSEUDO.github.io/Water-Tracker/)

## 📝 Description

Water Tracker est une application "Single Page" (SPA) permettant de comptabiliser le nombre de verres d'eau bus dans la journée. L'objectif était de concevoir une architecture propre, modulaire et réactive sans utiliser de bibliothèques tierces pour la gestion d'état.

L'application sauvegarde automatiquement la progression de l'utilisateur dans le navigateur, permettant de conserver les données même après fermeture de l'onglet.

## ✨ Fonctionnalités

* **Ajout rapide** : Incrémentation du compteur en un clic.
* **Réinitialisation** : Remise à zéro manuelle du compteur.
* **Persistance des données** : Sauvegarde automatique via `LocalStorage`.
* **Design Responsive** : Interface adaptée aux mobiles et desktops (CSS pur).
* **Architecture Réactive** : Utilisation des **Signals** pour la gestion d'état.

## 🛠️ Stack Technique

* **Framework** : Angular (Standalone Components)
* **Gestion d'état** : Angular Signals & Services
* **Style** : CSS3 (Variables CSS, Flexbox)
* **Langage** : TypeScript
* **Déploiement** : GitHub Pages (CI/CD via Angular CLI)

## 📂 Architecture du Projet

Le projet suit une architecture stricte séparant la logique métier de l'interface utilisateur :

```text
src/app
├── core/           # Le "Cerveau" de l'application
│   └── water-tracker.service.ts  # Gestion d'état (Signals) et LocalStorage
└── ui/             # Les composants visuels (Dumb components)
    ├── water-controls/           # Boutons d'action (Boire / Reset)
    └── water-progress/           # Affichage du compteur