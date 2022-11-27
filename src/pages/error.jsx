import BtnLink from '../componets/btnLink';

const ErrorPage = () => {
  return (
    <div className="h-52 flex flex-col justify-center items-center gap-y-7">
      <div>
        <h3 className="text-xl text-slate-200">ERROR 404: NOT FOUND </h3>
      </div>
      <div>
        <BtnLink href={'/'} name={'Volver a inicio'} />
      </div>
    </div>
  );
};

export default ErrorPage;
