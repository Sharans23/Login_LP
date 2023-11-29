import * as Yup from 'yup'

export const Validation = Yup.object({
    Name:Yup.string().min(3).required("please enter your name"),
    Email:Yup.string().email("please enter valid email").required("please enter a email"),
    lEmail:Yup.string().email("please enter valid email").required("please enter a email"),
    Password:Yup.string().min(6).required("enter your password"),
    lPassword:Yup.string().min(6).required("enter your password"),
    cPassword:Yup.string().oneOf([Yup.ref("Password"),null],"Password not matched").required("Please confirm your password")
})