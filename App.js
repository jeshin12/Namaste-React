

const heading = React.createElement('h1',{ id:'heading'},'hello jeshin from react');

const parent = React.createElement(
    'div',{id:'parent'},
   [React.createElement(
        'div',{id:'child1'},
        [React.createElement('h1',{},'hallo this is h1 tag'),React.createElement('h2',{},'hallo this is h2 tag')]),
    ],[React.createElement(
        'div',{id:'child2'},
        [React.createElement('h1',{},'hallo this child 2 is h1 tag'),React.createElement('h2',{},'hallo this child 2 is h2 tag')])]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)