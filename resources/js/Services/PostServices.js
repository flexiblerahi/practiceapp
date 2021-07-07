import axios from "axios";

const PostServices = {};

PostServices.list = async() => {
    const url = '/post';
    const response = axios.get(url)
                    .then(response => {return response.data})
                    .catch(error => {return error})
    return response;
}

export default PostServices;