const { MAPPING } = require('./constants');

let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') process.exit();
    connection.write(MAPPING[key]);
  });
};

module.exports = { setupInput };