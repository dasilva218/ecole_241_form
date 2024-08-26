"use client";

import Image from "next/image";

export default function Confirme() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-lg p-5 bg-white rounded-lg shadow-md flex flex-col items-center">
        <div className="mb-4">
          <img
            src=" \assets\img.svg"
            alt=""
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <h2 className="text-center text-gray-800 font-bold">
          Votre formulaire a été bien envoyé!
        </h2>
      </div>
    </div>
  );
}
