import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import App from './App.jsx'
import GeneralInfo from './components/general';

// Find the element where you want to render GeneralInfo
const contentElement = document.querySelector('.first');


createRoot(contentElement).render(
  <StrictMode>
    <GeneralInfo />
  </StrictMode>
)

