import axios from 'axios';

export const getPlacesData = async type => {
  const options = {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
    params: {
      bl_latitude: '36.72',
      tr_latitude: '41.57',
      bl_longitude: '26.92',
      tr_longitude: '42.61',
      limit: '30',
      currency: 'USD',
      lunit: 'km',
      lang: 'en_US',
    },
    headers: {
      'X-RapidAPI-Key': '5e1b5b32c4mshad5b1b1f3e1c3c4p1b95fcjsn83a801dd00aa',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
