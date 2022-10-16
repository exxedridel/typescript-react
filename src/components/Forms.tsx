import React, { useState } from "react";
import {Sub} from "../types"
// import types and replace em with Sub
interface FormState {
   inputValues: Sub
}

const Form = () => {
   const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
      nick: "",
      subMonths: 0,
      avatar: "",
      description: "",
   })

   const handleSubmit = () => { }

   // TS needs the Event to be typed 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValues({
         ...inputValues,
         [e.target.name]: e.target.value
      })
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="nick" placeholder="nick" />
            <input onChange={handleChange} type="text" name="subMonths" placeholder="subMonths" />
            <input onChange={handleChange} type="text" name="avatar" placeholder="avatar" />
            <textarea onChange={handleChange} name="description" placeholder="description" />
            <button>Save new sub!</button>
         </form>
      </div>
   )
}

export default Form 