import axios from 'axios'
const host = process.env.HOST || 'https://jsonplaceholder.typicode.com'
class API {
    constructor() {
        console.log("API constructor")
    }

    async callAPI(id: string){
        const response = await axios.get(host+'/todos/'+ id)
        return response.data
    }
}

export {API}