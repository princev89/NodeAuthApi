const joi = require('@hapi/joi')


const registerValidation = data => {
    const schema = {
        name: joi.string().required().min(6),
        email: joi.string().required().email().min(6),
        password : joi.string().required().min(6)
    };

   return  joi.validate(data, schema);
};

const loginValidation = data => {
    const schema = {
        name: joi.string().required().min(6),
        email: joi.string().required().email().min(6),
        password : joi.string().required().min(6)
    };

   return  joi.validate(data, schema);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
