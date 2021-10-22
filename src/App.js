import React from 'react';
import './style.css';
import InputConverter from './InputConverter';


export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <InputConverter type="centimètre" />
      <InputConverter type="mètre" />
    </div>
  );
}
