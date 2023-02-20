import React from "react";
import { Link } from "react-router-dom";

export default function AccLog() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/*Aquí puedo agregar una imagen svg con el nombre fuera del contenedor*/}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-6 dark:bg-gray-800 dark:border-gray-700">
            {/* Título del Contenedor */}
            <h1 className="text-2xl font-bold leading-tight tracking-tight px-2 text-zinc-900 md:text-3xl dark:text-white">
              Ingresa a tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="py-4 px-2">
                {/* Correo Electrónico */}
                <label
                  for="email"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="correo@electronico.com"
                  required=""
                />
                {/* Contraseña */}
                <label
                  for="password"
                  className="block mb-2 mt-4 text-md font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required=""
                />
              </div>
              {/*Contraseña Olvidada (Hipervínculo)*/}
              <div className="flex items-center justify-center">
                <Link to={"../sessions/ChangePassword.js"}>
                  ¿Olvidaste la contraseña? Haz click aquí para cambiarla
                </Link>
              </div>

              {/*Botón de Acceder */}
              <button
                type="submit"
                className="w-full text-primary bg-primary-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-green-400 dark:focus:ring-primary-800"
              >
                Acceder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
