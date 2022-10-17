// helper function for input type validation.
function typeValidation(inputObject) {
    // Base type list
    let allowedTypeList = ["text", "email","password"];

    // logic to compare with user provided input type for validation
    return allowedTypeList.includes(inputObject["type"])
}

// helper function for input property validation.
function validationProperty(propertyObject){
    // Base property list
    // Set default value to false
    let allowedPropertyList=["type","value","placeholder"],
        propertyValidated = false;

    propertyObject.forEach(elements => {
        propertyValidated = allowedPropertyList.includes(elements)
    })
    return propertyValidated
}

// helper function to validate input Type & Property in a single function
// remember, this function uses the upper two functions
function objectValidation(objectToValidate) {

    // Base case
    let typeValidated = false,
    propertyValidated = false;

    for (i=0; i<objectToValidate.length; i++) {
        console.log(objectToValidate[i])
        propertyValidated = validationProperty(Object.keys(objectToValidate[i]))
        typeValidated = typeValidation(objectToValidate[i])
        
        if (!propertyValidated || !typeValidated) {
            break
        }
    }

    return propertyValidated & typeValidated
}