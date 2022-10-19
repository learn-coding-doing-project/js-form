// Element object, that we will use in the function
let elemObj=[
    {
        type:"text",
        value:"Full Name",
        placeholder:"Put your Full Name Here"
    },
    
    {
        type:"email",
        value:"Email",
        placeholder:"Put your Email Here"
    },
    {
        type:"text",
        value:"Date of Birth",
        placeholder:"Write your date of birth"
    },
    {
        type:"password",
        value:"password",
        placeholder:"password"
    }
]

// The form creation function
createForm(elemObj);

// Form input field's empty state validation
let formSubmitButton = document.getElementById("js-powered-form-submit");
formSubmitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let allInputFields = document.getElementsByClassName("js-powered-form")[0];

    // ES6 way
    for (const singleInput of allInputFields) {
        // console.log(singleInput.value)
        if (!singleInput.value) {
            alert(`Empty ${singleInput.type} field isn't accepted!`)
            break;
        }
    }
    
    // Old school for...loop way
    // for (i=0; i<allInputFields.length; i++) {
    //     // console.log(allInputFields[i].value, allInputFields[i].type)
    //     if (!allInputFields[i].value) {
    //         alert(`Empty ${allInputFields[i].type} field isn't accepted!`)
    //         break;
    //     }
    // }

})