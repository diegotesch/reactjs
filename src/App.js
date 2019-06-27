import React from 'react';
// import api from './services/api';

import './styles.css';

//Components
import Header from './components/Header';
import Main from './pages/main';

const App = () => (
    <div className="App">
      <Header />
      <Main />
    </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;
