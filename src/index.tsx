import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 100% 안전 장치: root나 app이라는 도화지를 찾고, 아예 없다면 직접 만듭니다.
let rootElement = document.getElementById('root') || document.getElementById('app');

if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
