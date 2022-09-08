import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import CRUDApp from './components/CRUDApp';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<CRUDApp />);
