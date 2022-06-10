import Navigation from "../components/navigation/Navigation"
import Heading from '../components/heading/Heading';
import Head from "../components/head/Head";

export default function Admin() {
  return (
    <Navigation>
      <Head title="Admin page"/>
      <div className='container'>
        <Heading title="Admin"/>
      </div>
    </Navigation>
  )
}
