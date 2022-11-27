import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import parse from 'html-react-parser';

import { MainContext } from '../context/main';

const ClientPage = () => {
  const { data } = useContext(MainContext);
  const [client, setClient] = useState(null);

  const { clientName } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    if (data === null) navigation('/error');
    else if (data.length > 0)
      setClient(data.find((c) => c.cliente === clientName));
    else navigation('/');
  }, [clientName]);

  const capitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  if (!client)
    return (
      <>
        <span className="text-slate-200 text-lg">Cargando..</span>
      </>
    );

  return (
    <>
      <div className=" min-h-full max-w-screen-lg w-full flex flex-col gap-y-9 lg:w-[920px] md:w-[720px] sm:w-[350px]">
        <div className="my-10">
          <h2 className="text-6xl text-slate-200 font-bold">
            {capitalized(client.cliente)}
          </h2>
        </div>
        <div className="w-full flex">
          <h3 className="text-3xl text-slate-200 font-semibold">
            Test: Test de usabilidad del sitio web
          </h3>
        </div>
        <div className="w-80 flex">
          <h4 className="text-2xl text-slate-200 font-semibold">Testeador 1</h4>
        </div>
        <div className="w-full lg:h-[600px] lg:flex lg:justify-center">
          <div className="lg:w-[920px] lg:h-[520px] md:w-[520px] md:h-[320px]">
            <ReactPlayer
              url={client.linkVideo}
              controls={true}
              playing
              volume={0.75}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="lg:w-[600px] flex flex-col gap-y-4 sm:w-[320px]">
          <h3 className="text-3xl text-slate-200 font-semibold">
            Transcripción
          </h3>
          <div className="lg:w-[600px] h-72 overflow-scroll sm:w-[320px] ">
            <p className="text-slate-200 text-lg lg:w-[530px] pb-14 font-semibold pl-5 sm:w-[320px]">
              {parse(client.transcripcion)}
            </p>
          </div>
        </div>
        <div className="lg:w-[500px] flex flex-col gap-y-4 sm:w-[320px]">
          <h3 className="text-3xl text-slate-200 my-5 font-semibold">Tareas</h3>
          <div className="">
            <p className="text-slate-200  font-semibold ">
              Escenario: {client.escenario}
            </p>
          </div>
          <div className="w-full flex flex-col gap-y-6 sm:gap-y-9 mb-12">
            {client?.preguntas.map((p, i) => (
              <div
                key={i}
                className="lg:w-full border-t-2 border-slate-200 sm:w-[350px]"
              >
                <div className="lg:w-[420px] flex flex-col gap-y-2 pl-5 mt-4 sm:w-[240px]">
                  <p className="text-slate-200 lg:text-lg font-semibold sm:text-base">
                    Tarea {i + 1}:
                  </p>
                  <p className="text-slate-200 lg:text-lg font-semibold sm:text-base">
                    {parse(p.texto)}
                  </p>
                  <p className="text-slate-200 lg:text-base font-semibold ">
                    Respuesta: {p.respuesta}
                  </p>
                  <p className="text-red-500 lg:text-lg mt-2 font-semibold sm:text-base">
                    Duracion de tarea: {p.tiempo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;
