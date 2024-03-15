import SignUpFormA from "../components/SignUpFormA";
import SignUpFormB from "../components/SignUpFormB";

const SignUp = () => {
    return ( 
        <>
        <SignUpFormA />
        {/* i do not know how to link pages so they will be placed on top of each other */}
        <SignUpFormB />
        </>
     );
}
 
export default SignUp;