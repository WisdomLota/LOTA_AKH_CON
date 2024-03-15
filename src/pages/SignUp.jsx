import SignUpFormA from "../components/SignUpFormA";
import SignUpFormB from "../components/SignUpFormB";
import SignUpTester from "../components/SignUpTester"

const SignUp = () => {
    return ( 
        <>
        <SignUpFormA />
        {/* i do not know how to link pages so they will be placed on top of each other */}
        <SignUpFormB />
        {/* <SignUpTester />*/}
        {/*I use the SignUpTester to try out certain things */}
        </>
     );
}
 
export default SignUp;