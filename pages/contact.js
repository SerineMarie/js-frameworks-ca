import Navigation from "../components/navigation/Navigation";
import Head from "../components/head/Head";
import Heading from '../components/heading/Heading';
import ContactForm from "../components/contact/ContactForm";

export default function Contact(props) {
  console.log(props)
  return (
    <Navigation>
      <Head title="Contact us"/>
      <div className='container'>
        <Heading title="Contact Us"/>
        <div className="form-container">
          <ContactForm/>
        </div>
        
      </div>
    </Navigation>
  )
}

