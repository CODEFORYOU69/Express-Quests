const argon2 = require("argon2");

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
};

const hashPassword = (req, res, next) => {
    argon2
        .hash(req.body.password, hashingOptions)
        .then((hashedPasseword) => {
            console.log(hashedPasseword);
            req.body.hashedPassword = hashedPasseword;
            delete req.body.password;
            next();
  // hash the password using argon2 then call next()
})
.catch((err) => {
    console.error(err);
    res.sendStatus(500).send("Error hashing password");
});
};

module.exports = {
  hashPassword,
};
