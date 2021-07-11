import React from 'react';
import { useState } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from "./Confirm";
import Success from './Success'
const UserForm = () => {
    const [step,setStep] = useState(1)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [occupation,setOccupation] = useState('')
    const [city,setCity] = useState('')
    const [bio,setBio] = useState('')

    // method to proceed to next step

 const nextStep = () => {
        setStep(step+1)
    }

 const prevStep = () => {
        setStep(step-1)
    }
    const values = {firstName,lastName,email,occupation,city,bio}

    //Handle feild change
    const handleChange = (input) => e =>{

            if(input === "firstName"){
                setFirstName(e.target.value)
            }

            if(input === "lastName"){
                setLastName(e.target.value)
            }

            if(input === "email"){
                setEmail(e.target.value)
            }

            if(input === "occupation"){
                setOccupation(e.target.value)
            }

            if(input === "city"){
                setCity(e.target.value)
            }

            if(input === "bio"){
                setBio(e.target.value)
            }
    }

    
    switch (step) {
        case 1: 
              return ( 
                  <FormUserDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}

                  />
                );

        case 2: 
                return (
                  <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                  />
                );
        case 3:
                return (
                  <Confirm
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                  />
                );
        case 4:
                return (
                        <Success/>
                
                    )
        default:
                return <h2> chutti kro</h2>
    }

}
export default UserForm;