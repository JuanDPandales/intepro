import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 w-full overflow-y-hidden py-6 bg-gray-200 text-gray-900">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid justify-center lg:justify-center">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>*Redireccionar a mi Github*</span>
              <a rel="noopener noreferrer" href="#">
                <span>*Redireccionar al proyecto</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>*Contacto*</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
