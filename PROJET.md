# PROJET

**Date** : 2026-10-11

## Prompt initial

remet l'ancienne photo ia de l'équipe au travaille

## Décisions importantes

- 2026-10-11 : photos générées par IA remplacées par de vraies photos (4 Pexels verticales pour les bannières). La photo IA `equipe-plomberie-toutan.jpg` est conservée volontairement pour « L'équipe au travail ». Les 2 AVIF restent en réserve. Les 4 anciennes bannières IA sont toujours dans `assets/` mais ne sont plus utilisées.
- 2026-10-11 : accueil refait dans le style de plumber-128.webflow.io (mêmes sections, couleurs marine/orange conservées). Typo du site : Space Grotesk (titres) + DM Sans (texte). Styles `.hp-*` dans la page ; la bannière photo est réservée aux pages intérieures.
- 2026-10-11 : animations ajoutées sur l'accueil (CSS + IntersectionObserver, sans librairie), désactivées si « réduire les animations » est actif.
- 2026-10-11 : page Services refaite façon plumber-128 « Our services » : cartes photo avec pastille d'icône, CTA orange, animations. 6 photos Pexels (licence gratuite) + 2 vraies photos AVIF du client.
- 2026-10-11 : page À propos refaite façon plumber-128 « About us 2 » (mêmes sections et textes, nouvelle mise en page + animations).
- 2026-10-11 : animations de texte sur la page Contact (titres, lignes en cascade, reflet sur le téléphone). Tout commité et poussé sur gabrielrakoto/plomberie-pro-demo (master).

## Stack choisie

Page statique HTML (format .dc avec le design system FixFlow), CSS et JS sans librairie, polices Google (Space Grotesk + DM Sans), déploiement Vercel.