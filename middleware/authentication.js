const fs = require('fs');
const path = require('path')
const userPath = path.join( 'db', 'users.json')

const users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));

function authenticateUser(req, res, next) {
  const apiKey = req.headers['api-key'];

  // Find the user with the provided API key
  const user = users.find((u) => u.apiKey === apiKey);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Attach the user object to the request for use in subsequent middleware
  req.user = user;
  next();
}

module.exports = { authenticateUser };
