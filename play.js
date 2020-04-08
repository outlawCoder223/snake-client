const { connect } = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    console.log(key);
    if(key === '\u0003') process.exit();
  });
}; 

console.log('Connecting ...');
setupInput();
connect();