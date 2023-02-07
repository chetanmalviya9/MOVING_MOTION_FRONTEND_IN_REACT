import axios from 'axios'
import Token from '../Token';
class WebService{
    
    static getApi(url,data){
        
        return axios.get(url,data)
    }
    static postApi(url,data){
        return axios.post(url,data)
    }
}
export default WebService;