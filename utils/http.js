import axios from 'axios'


export async function fetchData(){

    const response = await axios.get('https://pharmacy.tkouleris.eu/')
    return response.data
}

