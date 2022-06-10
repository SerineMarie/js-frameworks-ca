import axios from "axios";
import Heading from "../../components/heading/Heading";
import Head from "../../components/head/Head";
import Navigation from "../../components/navigation/Navigation";
import { BASE_URL } from "../../constans/api";

export default function Mojito ({mojito}){
    return(
        <Navigation>
            <Head title="Recipe page"/>
            <div className="container">
                <Heading title="Mojito"/>
                <h2>{mojito.strDrink}</h2>
                <h3>Glass:</h3>
                <p>{mojito.strGlass}</p>
                <h3>Ingredients:</h3>
                <p>{mojito.strIngredient1}</p>
                <p>{mojito.strIngredient2}</p>
                <p>{mojito.strIngredient3}</p>
                <p>{mojito.strIngredient4}</p>
                <p>{mojito.strIngredient5}</p>
                <p>{mojito.strIngredient6}</p>
                <p>{mojito.strIngredient7}</p>
            </div>
        </Navigation>
    )
}

export async function getStaticPaths(){
    try {
        const response = await axios.get(BASE_URL);

        const recipes = response.data.drinks;

        console.log(recipes)
    
        const paths = recipes.map((mojito) =>({
            params: {id: mojito.idDrink.toString()},
        }));

        return {
            paths: paths, fallback: false
        };
    
    } catch(error){
        console.log(error)
    }
}

export async function getStaticProps({params}){
    const url = `${BASE_URL}/${params.id}`;
    console.log(params)
    console.log(url)

    let mojito = null;

    try{
        const response = await axios.get(url);
        mojito = response.data;

        console.log(mojito)
        console.log("HELLO")

    } catch (error){
        console.log(error)
    }    
    return {
        props: {mojito: mojito},
    };
}