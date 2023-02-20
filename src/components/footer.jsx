import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-6  bg-gray-200 text-gray-900">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid justify-center  lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>El papá de los footers</span>
              <a rel="noopener noreferrer" href="#">
                <span>El mejor footer que he hecho</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Chao</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
