import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'asn jose',
        },
      });
      setResult(res.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('f');
  }, []);

  return [result, searchApi, errorMessage];
};
