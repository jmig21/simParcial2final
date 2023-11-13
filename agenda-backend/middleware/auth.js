const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
