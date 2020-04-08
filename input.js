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
    if (key === 'w') connection.write('Move: up');
    if (key === 'a') connection.write('Move: left');
    if (key === 's') connection.write('Move: down');
    if (key === 'd') connection.write('Move: right');

    if (key === '\u0003') process.exit();
  });
};

module.exports = { setupInput };