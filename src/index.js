//importing ReactDOM
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

//creates the main entry point. Tells react where the react application should be placed in the webplace
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
