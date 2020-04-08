const net = require('net');
const { IP, PORT, INITIALS } = require('./constants');

/**
 * Established connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    // host: 'localhost',
    port: PORT
    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write(INITIALS);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };