import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { AUTH_API, TOKEN_PATH } from "../../constans/api";
import axios from "axios";
import { useState } from "react";

const url = AUTH_API + TOKEN_PATH;

const schema = yup.object().shape({
    form: yup.string().required("Invaild login")
});

function LoginForm(){
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data){
        setSubmitting(true)
        setLoginError(null)
        console.log(data)

        try {
            const response = await axios.post(url, data);
            console.log(response, response.data);
        } catch(error){
            console.log(error)
            setLoginError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

    console.log(errors);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {loginError}
            <fieldset disabled={submitting}>
                {errors.form && <span>{errors.form.message}</span>}

                <input type="text" {...register("Username")} placeholder="Username"/> 

                <input type="password"{... register("Password")} placeholder="Password"/>

                <button>{submitting ? "Logging in" : "Login"}</button>
            </fieldset>
        </form>
    )
}

export default LoginForm;