const { User } = require("../models")

checkDuplicateLoginId = (req, res, next) => {
    // Login_id
    User.findOne({
        where: {
            login_id: req.body.login_id
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! LoginID is already in use!"
            })
            return
        }
    })
}

const verifyRegistration = {
    checkDuplicateLoginId: checkDuplicateLoginId,
}

module.exports = verifyRegistration