import React from 'react'; 
import './App.css'; 

/**
 * App component that displays a simple "Hello, World!" message and demonstrates JSX.
 * @returns {JSX.Element} The rendered React component.
 */
function App() {
  // JSX allows us to write HTML-like elements directly within JavaScript.
  // These elements are then transpiled into React.createElement() calls.
  return (
    <div className="App"> {/* This is a top-level div, common in React components */}
      <header className="App-header"> {/* Another HTML-like element */}
        {/*
          Below are examples of JSX syntax:
          - Using standard HTML tags like <h1>, <p>
          - Embedding JavaScript expressions within curly braces {}
          - Applying CSS classes using `className` (instead of `class` in HTML)
        */}
        <h1>Hello, World!</h1> {/* A simple heading */}
        <p>
          This is a simple React application.
        </p>
        <p>
          We are experimenting with <strong>JSX</strong> syntax.
        </p>
        {/* You can also embed variables or simple expressions */}
        <p>The current year is: {new Date().getFullYear()}</p>
        {/* You can even include simple inline styles using a JavaScript object */}
        <p style={{ color: 'lightblue', fontSize: '1.2em' }}>
          This text has inline styles applied through JSX.
        </p>
      </header>
    </div>
  );
}



export default App;