import axios from 'axios';

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';
const JSON_SERVER_URL = 'http://localhost:3001/posts';

export const getPostsFromPlaceholder = () =>{

  return  axios.get(JSON_PLACEHOLDER_URL);
}

export const getPostsFromServer = () => 
    {
        return axios.get(JSON_SERVER_URL);
    }

export const addPostToPlaceholder = (post) =>{
  return  axios.post(JSON_PLACEHOLDER_URL, post);

}

export const addPostToServer = (post) =>{

   return axios.post(JSON_SERVER_URL, post);
}


export const updatePostInPlaceholder = (id, post) => 
    {
        return axios.put(`${JSON_PLACEHOLDER_URL}/${id}`, post);
    }

export const updatePostInServer = (id, post) =>{

    return axios.put(`${JSON_SERVER_URL}/${id}`, post);

} 


export const deletePostInPlaceholder = (id) => {

   return axios.delete(`${JSON_PLACEHOLDER_URL}/${id}`);
}



export const deletePostInServer = (id) =>{

   return axios.delete(`${JSON_SERVER_URL}/${id}`);
}

