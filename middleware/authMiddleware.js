const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send("Unauthorized");
    } 

    const token = authHeader.split(" ")[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).send("Unauthorized");
    }
}

module.exports = authMiddleware;