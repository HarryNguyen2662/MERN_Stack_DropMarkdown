import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',//http://localhost:8080/api
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173', //http://localhost:5173
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Credentials': 'true'
    },
    withCredentials: true,


});
axios.defaults.withCredentials = true;
export default api;
