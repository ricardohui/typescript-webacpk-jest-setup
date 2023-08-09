import axios from 'axios'
class API {
    constructor() {
        console.log("API constructor")
    }

    async callAPI(id: string){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/'+ id)
        return response.data
    }
}

export {API}