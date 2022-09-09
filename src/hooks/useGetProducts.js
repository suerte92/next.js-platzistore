import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data.filter((item) => {
        return item.images.length > 1;
      }));
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
