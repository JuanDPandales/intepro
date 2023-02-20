import React from "react";
import LogIn from "./sessions/AccLog";

export default function SignUp() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/*Aquí puedo agregar una imagen svg con el nombre fuera del contenedor*/}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-6 dark:bg-gray-800 dark:border-gray-700">
            {/* Título del Contenedor */}
            <h1 className="text-2xl font-bold leading-tight tracking-tight px-2 text-zinc-900 md:text-3xl dark:text-white">
              Crear Cuenta
            </h1>
            <form className="space-y-4 md:space-y-2" action="#">
              {" "}
              {/* Poner método post */}
              <div className="block text-md px-2 mt-6">
                <label
                  for="name"
                  className="text-white flex items-center font-medium"
                >
                  Nombre
                </label>
                <input
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 mb-4 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="Primer Nombre"
                />
                <label
                  for="surname"
                  className="text-white flex items-center font-medium"
                >
                  Apellido
                </label>
                <input
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full my-2 p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="Primer Apellido"
                />
              </div>
              <div className="flex items-center justify-center"></div>
              <div className="mb-2 px-2">
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
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full my-2 p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="correo@electronico.com"
                  required=""
                />
                {/* Fin Correo Electrónico */}
                {/* Contraseña */}
                <label
                  for="password"
                  className="block my-2 text-md font-medium text-gray-900 dark:text-white"
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
                <label
                  for="password"
                  className="block my-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Verificar Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 mb-6 p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required=""
                />
              </div>
              {/*Fin Contraseña*/}
              {/*Botón de Acceder */}
              <button
                onClick={<LogIn />}
                type="submit"
                className="w-full text-primary bg-primary-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-green-400 dark:focus:ring-primary-800"
              >
                Crear Cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
