// app.ts
import React from 'react';
import Navbar from './NavBar/Navbar';

function App(): React.ReactElement {
  return React.createElement(
    'div',
    null,
    React.createElement(Navbar, null),
    React.createElement(
      'main',
      null,
      React.createElement(
        'h1',
        { className: 'Title' },
        "Chiku's Domain!"
      ),
      React.createElement('img', {
        className: 'Chiku',
        src: '/assets/884AF75A-5E7B-4E96-AB00-29FBD4966FDF.png',
        alt: 'Portfolio'
      })
    )
  );
}

export default App;