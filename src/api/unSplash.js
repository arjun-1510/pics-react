import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
       Authorization: 'Client-ID G-TBb15pwaui1Dgh6HJKMLXDjyW-RtsVDLrfmncMC7s'
      

    }
});

