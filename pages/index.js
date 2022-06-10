import Navigation from "../components/navigation/Navigation"
import Heading from '../components/heading/Heading'
import Head from "../components/head/Head";
import axios from "axios";
import { BASE_URL } from "../constans/api";

export default function Home(props) {
  console.log(props)
  return (
    <Navigation>
      <Head title="Home"/>
      <div className='container'>
        <Heading title="Home"/>
        <div className='mojito-container'>
          {props.drink.map((mojito) => {
            return <a key={mojito.idDrink} href={`mojito/${mojito.idDrink}`}>
                      <div className='recipe-container'>
                        <h3 key={mojito.idDrink}>Name: {mojito.strDrink}</h3>
                        <p>Glass: {mojito.strGlass}</p>
                      </div>
                    </a> 
          })}
        </div>
      </div>
    </Navigation>
  )
}

export async function getStaticProps(){
  let drink = [];

  try{ 
    const response = await axios.get(BASE_URL);
    console.log(response.data)
    drink = response.data.drinks;
  } catch(error){
    console.log(error)
  }

  return {
    props: {
      drink: drink,
    },
  };
}