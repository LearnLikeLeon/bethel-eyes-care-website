"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [communication, setCommunication] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("api/email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        service,
        communication,
        message,
      }),
    });

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        service,
        communication,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setService("");
      setCommunication("");
      setMessage("");
    }
  };

  return (
    <section>
      <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Info Section */}
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Contactez-nous
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Nous vous remercions pour votre visite... <br />
                  Comment peut-on vous aider? Ecrivez-nous pour nous faire part
                  de toutes questions médicales.
                  <br />
                  Pardon remplissez juste cette section de questionnaires et
                  notre équipe vous contactera dès que possible.
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Republic of South Africa, Cape Town, 7525
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +27 21 XXX XXXX
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@betheleyescare.com
                  </div>
                </div>
              </div>

              {/* Right Form Section */}
              <form
                onSubmit={handleSubmit}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-md tracking-wide font-semibold"
                  >
                    Votre nom et prénom
                  </label>
                  <Input
                    type="text"
                    id="fullname"
                    placeholder="nom et prénom du client"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="email"
                    className="text-md tracking-wide font-semibold"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="client@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="service"
                    className="text-md tracking-wide font-semibold"
                  >
                    Selectionnez votre service désiré:
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="input"
                  >
                    <option value="" disabled>
                      Choisissez un service
                    </option>
                    <option value="Examens de la vue">Examens de la vue</option>
                    <option value="Conseils en lunetterie">
                      Conseils en lunetterie
                    </option>
                    <option value="Ajustement et réparation de lunettes">
                      Ajustement et réparation de lunettes
                    </option>
                    <option value="Suivi optométrique personnalisé">
                      Suivi optométrique personnalisé
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="communication" className="hidden">
                    Méthode de communication
                  </label>
                  <select
                    id="communication"
                    value={communication}
                    onChange={(e) => setCommunication(e.target.value)}
                    required
                    className="input"
                  >
                    <option value="" disabled>
                      Choisir votre méthode de communication
                    </option>
                    <option value="SMS">SMS</option>
                    <option value="Email">Email</option>
                    <option value="Appel Téléphonique">
                      Appel Téléphonique
                    </option>
                  </select>
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Saisissez votre message ici..."
                    className="input"
                  />
                </div>

                <Button
                  type="submit"
                  className="md:w-32 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                >
                  Contactez-Nous
                </Button>
              </form>

              {/* Messages */}
              <div className="bg-slate-100 flex flex-col">
                {error &&
                  error.map((e, index) => (
                    <div
                      key={index}
                      className={`${
                        success ? "text-green-800" : "text-red-600"
                      } px-5 py-2`}
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
