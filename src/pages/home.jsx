import { useContext } from 'react';

import { MainContext } from '../context/main';
import BtnLink from '../componets/btnLink';
const Home = () => {
  const { data, loading, error } = useContext(MainContext);
  return (
    <>
      <div className=" min-h-full w-full flex flex-col items-center justify-center ">
        <div className="mt-16 ">
          <h1 className="text-5xl text-slate-200 text-center">
            Bienvenidos al testeador de clientes
          </h1>
        </div>
        <div className="w-80  my-12 flex justify-center items-center">
          <h2 className="text-2xl text-slate-200">Selecciona el cliente</h2>
        </div>
        <div className="w-80 h-12 flex justify-center items-center gap-x-8">
          {!data & !!loading ? (
            <span className="text-slate-200 text-lg">Cargando..</span>
          ) : (
            data?.map((c) => (
              <BtnLink
                key={c.cliente}
                href={`/${c.cliente}/testeador-1`}
                name={c.cliente}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
