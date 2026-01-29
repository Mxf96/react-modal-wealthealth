# WealthHealth Modal (React)

---
Composant **Modal** React simple (overlay, fermeture au clic extérieur + bouton de fermeture), extrait du projet HRnet.

---
## Installation

`npm install @ton-scope/wealthealth-modal`

Remplace @ton-scope/wealthealth-modal par le nom exact de ton package.

---
## Prérequis (SCSS)

Ce package utilise un fichier .scss. Ton projet doit donc pouvoir compiler le SCSS.

Si tu es sur Vite / CRA, installe Sass :

`npm install sass`

---
## Utilisation

import { useState } from "react";

```jsx
import Modal from "@ton-scope/wealthealth-modal";
export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Employé créé</h2>
        <p>Le nouvel employé a bien été enregistré.</p>
      </Modal>
    </>
  );
}
```

---
## Props

| Prop | Type | Obligatoire | Description |
| ---------------------- | ---------------------------------------------------- |
|`isOpen`|`boolean`|Oui|Affiche/masque la modale|
|`onClose`|`() => void`|Oui|Fonction appelée pour fermer la modale|
|`children`|`ReactNode`|Oui|Contenu affiché dans la modale|

---
## Comportement

- Si isOpen est false, la modale ne rend rien (null).
- Clic sur l’overlay → onClose() (fermeture).
- Clic dans le contenu → ne ferme pas (stopPropagation).
- Bouton ✖ → onClose() (fermeture).
---
## Classes CSS

Le composant utilise ces classes :
- .modal-overlay
- .modal-content
- .modal-close