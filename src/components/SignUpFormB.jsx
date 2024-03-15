import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "../styles/Form.css";
import AKHDesign from "../assets/AKH-Design.png";

function SignUpFormB() {

    const schema = yup.object().shape({
        passportNumber: yup.string().required("Please enter your Passport Number"),
    });

    const  { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return ( 
        <>
        <div class="whole">
        <div class="akh-img">
            <img src={AKHDesign} alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <form id="registration-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label for="passport-num">Passport Number: </label>
                    <input type="text" name="passport-num" id="passport-num" placeholder="B87908852"  {...register('passportNumber')}/>
                    <p>{errors.passportNumber?.message}</p>
                </div>
                <div class="form-group">
                    <label for="proof-of-residence">ID Card Image: </label>
                    <div class="id-talk">
                        <div class="image-symbol">
                        <input type="file" class="identification" name="proof-of-residence" accept="image*/"/><br/>
                            <label for="proof-of-residence" class="custom-id-image">
                                <span class="upload-symbol">&#8686;</span>
                                <span class="upload-text">Upload the image of a valid ID Card (this can<br/> be a passport, drivers license, NIN, National ID card)</span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="id-image">Proof of Residence: </label>
                    <div class="id-talk">
                        <div class="image-symbol">
                        <input type="file" class="identification" name="id-image" accept="image*/"/><br/>
                            <label for="id-image" class="custom-id-image">
                                <span class="upload-symbol">&#8686;</span>
                                <span class="upload-text">Upload proof of residence(this can<br/> be water bill, electricity bill or any document or image with your address)</span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="signature-img">Signature Image: </label>
                    <div class="id-talk">
                        <div class="image-symbol">
                        <input type="file" class="identification" name="signature-img" accept="image*/"/><br/>
                            <label for="signature-img" class="custom-id-image">
                                <span class="upload-symbol">&#8686;</span>
                                <span class="upload-text">Upload a handwritten image of your signature</span>
                                <span class="upload-text"><b>Maximum size of 2MB</b></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                <button type='submit'>NEXT</button>
                </div>
                
            </form>
        </div>
    </div>
        </>
     )
}
 
export default SignUpFormB;