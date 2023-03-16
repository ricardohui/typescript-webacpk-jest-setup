import * as _ from 'lodash';

export default function trimStart(param: string){
    const result = _.trimStart(param);
    console.log(result)
    return result;
}