import axios from 'axios';

class Network {
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://wookie.codesubmit.io',
            timeout: 1000,
            headers: {'Authorization': 'Bearer Wookie2019'}
          });
    }

    getAllMovies(){
        return this.instance.get(`/movies`)
    }

    searchMovie(q){
        return this.instance.get(`/movies?q=${q}`)
    }

}



/**
 * This exports a singleton. The Network can be imported to any component will be the same instance
 *  Allows for synchoronized network calls, authentication, access tokens, etc.
 */
const singleton = new Network();
export default singleton;