const isEmpty= require("./isEmpty")
const validator = require('validator')

module.exports = function ValidateUser(data) {
    let erros = {}; 
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
    data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
    data.Age = !isEmpty(data.Age) ? data.Age : "";

    if(!validator.isEmail(data.Email)){
        erros.Email= "Format Email Required !" ;
    }
    if(validator.isEmpty(data.Email)){
        erros.Email= "Required Email !" ;
    }
    if(validator.isEmpty(data.Firstname)){
        erros.Firstname = "Required FirstName !" ;
    }
    if(validator.isEmpty(data.Lastname)){
        erros.Lastname= "LastName required !" ;
    }
    if(validator.isEmpty(data.Age)){
        erros.Age = "Age required !" ;
    }

    return{
        erros,
        isValid : isEmpty(erros) 
    }
};
