import axios from 'axios';

const searchImages = async (term) => {
 const response=  await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: 'Client-ID 5mKTG64Ab8t4t0hiuLMx0GtJ5fBi7th5TANn7ppL4iY'
        },
        params: {
            query: term,
        }
    });
    console.log(response);
    return response.data.results;
};

export default searchImages;