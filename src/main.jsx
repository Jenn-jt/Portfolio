import React from 'react' // Importa la biblioteca React
import ReactDOM from 'react-dom/client' // Importa la biblioteca ReactDOM
import App from './App.jsx' // Importa el componente App
import './index.css' // Importa el archivo de estilos CSS

// Crea una raíz de React en el elemento con id 'root' y renderiza el componente App dentro de un modo estricto de React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)