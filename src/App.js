const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    { id: 'something-important' },
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'George',
      animal: 'cat',
      breed: 'gremlin',
    }),
    React.createElement(Pet, {
      name: 'Fred',
      animal: 'cat',
      breed: 'model',
    }),
    React.createElement(Pet, {
      name: 'Tiger',
      animal: 'cat',
      breed: 'ghost',
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
