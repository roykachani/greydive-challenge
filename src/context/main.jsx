import { createContext, useEffect, useState } from 'react';
import dataApi from '../database.json';

export const MainContext = createContext({
  data: null,
  loading: true,
  error: false,
  getData: () => {},
});

const { Provider } = MainContext;

export const MainProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const getClients = () => {
    try {
      setTimeout(() => {
        setData(dataApi);
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return <Provider value={{ data, loading, error }}>{children}</Provider>;
};
