# Portafolio Personal - Diego Valle 

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la interfaz de usuario.
- **Vite:** Entorno de desarrollo ultrarrápido.
- **Vitest & React Testing Library:** Para la suite de pruebas automatizadas (Testing).
- **CSS Puro:** Todo el diseño fue creado desde cero sin librerías externas de UI (como Tailwind o Bootstrap), utilizando la metodología de **Atomic Design**.
- **JavaScript (ES6+):** Uso de `const`, `let`, arrow functions y destructuring.

##  Arquitectura del Proyecto (Atomic Design)

El proyecto está rigurosamente estructurado mediante los siguientes metodos de Atomic Design:

```text
src/
 ┣ components/
 ┃ ┣ atoms/       
 ┃ ┣ molecules/   
 ┃ ┣ organisms/   
 ┃ ┣ pages/      
 ┃ ┗ templates/   
 ┣ assets/        
 ┣ App.jsx       
 ┣ index.css      
 ┗ main.jsx

```
## I.A utilizada para la ayuda en su uso fue DeepSeek y prompts utlizados.
Cual es es la forma para que se vea el año actual y que actue de manera independiente?

código usado.
const anioActual = new Date().getFullYear();

Necesito que resalta el diseño en tres pantallas de forma simultanea dame una forma dinamica

Se creo una carpeta index.html para configurar de manera ordenada este apartado.
código usado.
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800;900&display=swap" rel="stylesheet">

Paso de vista portafolio.

```bash
   cd PruebaParcial2-PortafolioDiegoValle
npm install
npm run dev
http://localhost:5173/ 

