import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import './styles/index.css'

const link = React.createElement('a', { href: 'reactjs.org' }, 'Ссылочка');
ReactDOM.render(link, document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const rootView = document.getElementById('root')

// if (rootView) {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     rootView
//   )
// }