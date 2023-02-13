import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900 h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold pt-6 text-white">
            <p>Lo sentimos, Ha ocurrido un error. 😅</p>
          </h1>
        </div>
        <button className="flex items-center justify-center text-white text-4xl font-semibold">
          <Link to={"/"}><br/><br/><br/>¿Deseas regresar al inicio? Haz click aquí</Link>
        </button>
      </div>
    </>
  );
}
