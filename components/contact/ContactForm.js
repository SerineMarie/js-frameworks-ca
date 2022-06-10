import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your firstname").min(3, "There must be at least 3 characters"),
    lastName: yup.string().required("Please enter your lastname").min(4, "There must be at least 4 characters"),
    email: yup.string().required("Please enter valid email address").email("Email address not valid"),
    subject: yup.string().required("Please choose a subject"),
    message: yup.string().required("Please fill out message form").min(10, "There must be at least 10 characters"),
});


function ContactForm(){
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data){
        console.log(data);
    }

    console.log(errors);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Firstname")} placeholder="Firstname"/> 
            {errors.firstName && <span>{errors.firstName.message}</span>}

            <input {... register("Lastname")} placeholder="Lastname"/>
            {errors.lastName && <span>{errors.lastName.message}</span>}

            <input type="email"{... register("Email address")} placeholder="Email address"/>
            {errors.email && <span>{errors.email.message}</span>}

            <select {... register("Subject")} placeholder="Select subject">
                <option disabled selected>Select a subject</option>
                <option>Hello</option>
                <option>World</option>
            </select>
            {errors.subject && <span>{errors.subject.message}</span>}


            <textarea {... register("Message")} placeholder="Message"/>
            {errors.message && <span>{errors.message.message}</span>}

            <button>Submit</button>
        </form>
    )
}

export default ContactForm;