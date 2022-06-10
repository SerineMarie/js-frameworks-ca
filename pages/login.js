import Navigation from "../components/navigation/Navigation"
import Heading from '../components/heading/Heading'
import Head from "../components/head/Head"
import LoginForm from "../components/loginForm/LoginForm"

export default function Login() {
  return (
    <Navigation>
      <Head title="Log in"/>
      <div className='container'>
        <Heading title="Log in"/>
        <LoginForm/>
      </div>
    </Navigation>
  )
}
