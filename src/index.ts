import {add} from 'lodash'
import  {API} from "./API";

const api = new API();

async function mySum(arg1: any = 1, arg2: any = 2){
    const result = add(arg1, arg2);
    
    console.log(result)
    const data = await api.callAPI(result.toString())
    console.log(data)
    return data;
}

export default mySum

mySum(1,2)