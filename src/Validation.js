import "./stylesignup.css";

const Validation = (values) => {
    let errors={};
    if(!values.fullname)
    {errors.fullname="Name is required."}
     if(!values.email){
        errors.email="Email is Required"
     }
     else if(!/\S+@\S+/.test(values.email))
     {
      errors.email="Email is invalid."
     }
     if(!values.password){
      errors.password="Password is Required"}
      else if(!values.password.length<6){
        errors.password="Password must be more then six characters."}

      

  return errors;
}

export default Validation