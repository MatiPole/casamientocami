import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FormInvitation, ResponsiveAppBar, FormTransport } from "./index.js";
import DibujoCopas from "./assets/imgs/dibujo-copas.png";
import LineaRoja from "./assets/imgs/linea-roja-horizontal.svg";
import LineaVerde from "./assets/imgs/linea-verde-vertical.svg";
import ArcosRojos from "./assets/imgs/arcos-rojo-horizontal.svg";
import ArcosRojosInverso from "./assets/imgs/arcos-rojo-horizontal-inversa.svg";
import Corazon from "./assets/imgs/corazon.svg";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="presentationBG pt-16 mb-32" id="inicio">
        <h1 className="text-center font-title text-cta text-5xl pt-10 ">
          Cami y Nico
        </h1>
        <p className="text-center font-bold font-accent text-cta text-xl pt-10 pb-4">
          16.11.2024
        </p>
        <img
          className="m-auto"
          src={DibujoCopas}
          alt="dibujo manos con copas"
        />
      </div>
      <div className="bg-cream pt-8 pb-24 md:py-20 px-4 relative adornoBG2">
        <img
          className="absolute top-0 -translate-y-2 w-full md:h-4 left-0"
          src={LineaRoja}
          alt="linea roja"
        />
        <img
          className="absolute w-[0.65rem] -top-8 left-1 "
          src={LineaVerde}
          alt="linea verde"
        />
        <h2 className="text-center font-medium font-title  text-cta  text-5xl pt-6 pb-10">
          ¡Nos casamos!
        </h2>
        <p className="text-center font-normal  text-cta font-primary text-lg pb-6">
          <span className="font-semibold">16 de Noviembre de 2024</span>, llegó
          el día y queremos compartirlo con vos. Acá te dejamos los datos más
          relevantes para que celebremos a lo grande.
        </p>
        <p className="text-center font-normal  text-cta font-primary text-lg">
          Comenzamos a las <span className="font-semibold">18.00 hs.</span>
        </p>
      </div>
      <div className="py-8 px-4" id="map">
        <h2 className="text-left font-medium font-title  text-cta text-5xl pt-6 pb-10  pl-4">
          Mapa
        </h2>
        <h3 className="text-left text-2xl text-dark pl-4 pb-4">
          - Campo Lobos Eventos -
        </h3>
        <p className="text-left font-normal  text-dark  font-primary text-lg pb-6 pl-4 ">
          Emilio Castro, Empalme Lobos, Provincia de Buenos Aires, Argentina.
        </p>
        <div className="flex p-4 justify-center">
          <iframe
            className=" rounded-3xl "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13048.71477061138!2d-59.124276!3d-35.152164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bdaa60d601bd9d%3A0x4def06536232c1f!2sCampoLobos!5e0!3m2!1ses-419!2sar!4v1717986234866!5m2!1ses-419!2sar"
            width="600"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-cream py-8 px-4 relative" id="regalos">
        <img
          className="absolute top-0 left-0 w-full -translate-y-1/2 md:h-[20px] md:w-full "
          src={ArcosRojos}
          alt="linea roja"
        />
        <h2 className="text-center font-medium font-title  text-cta text-5xl pt-6 pb-10">
          Regalos
        </h2>
        <p className="text-center font-medium  text-cta font-primary text-lg pb-6">
          Nuestro mejor regalo es tu presencia, pero si insistis, hace click en
          el botón y accedé a nuestra lista de novios.
        </p>
        <p className="text-center font-normal  text-cta text-2xl">¡Gracias!</p>
        <div className="flex justify-center pt-8">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#575756",
              "&:hover": { backgroundColor: "#575756" },
            }}
          >
            Ver Lista
          </Button>
        </div>
      </div>
      <div className="py-8 relative" id="asistencia">
        <img
          className="absolute top-0 w-full -translate-y-2 md:h-4 "
          src={LineaRoja}
          alt="linea roja"
        />
        <h2 className="text-center text-cta font-title text-5xl py-8 ">
          ¿Nos acompañas?
        </h2>

        <p className="text-center font-normal  text-cta font-primary text-lg pb-6 px-4">
          ¡Un evento para adultos está en camino, preparense para una noche
          llena de diversión!
        </p>
        <p className="text-center font-semibold  text-cta font-primary text-lg pb-6 px-4">
          Dejemos a los niños en casa esta vez.
        </p>
        <p className="text-center font-medium  text-cta font-primary text-lg pb-6 px-4">
          La confirmación es hasta el{" "}
          <span className="font-bold">1 de Noviembre de 2024</span>. Por favor
          no te olvides de avisarnos si podés asistir.
        </p>
      </div>
      <div className="md:relative">
        <FormInvitation></FormInvitation>
      </div>
      <div
        className="bg-cream py-16 md:py-32 px-4 relative adornoBG"
        id="dresscode"
      >
        <h2 className="text-center font-medium  text-cta font-title  text-5xl md:text-6xl pb-6">
          Dress Code
        </h2>
        <p className="text-center font-medium  text-dark font-primary text-3xl md:text-5xl pb-6 px-4">
          FORMAL
        </p>
        <img
          className="absolute bottom-0 left-0 w-full translate-y-1/2 md:h-[20px] md:w-full "
          src={ArcosRojosInverso}
          alt="linea roja"
        />
      </div>
      <div className="py-8 relative" id="hospedaje">
        <h2 className="text-center   text-cta font-title text-5xl pb-10 pt-4 ">
          Hospedaje & Micro
        </h2>

        <p className="text-left md:text-center leading-snug  text-cta font-semibold font-primary text-sm pb-6 px-4">
          ACÁ LES DEJAMOS ALGUNAS OPCIONES DE HOSPEDAJE EN LOBOS QUE NOS
          RECOMENDARON
        </p>
        <p className="text-left md:text-center leading-snug  text-opacity2 font-bold font-primary text-sm pb-6 px-4 ml-6">
          DONNA EMILIA <br /> NRO. 02227482216
        </p>
        <p className="text-left md:text-center leading-snug  text-opacity2 font-bold font-primary text-sm pb-6 px-4 ml-6">
          TERRAZAS DE LOBOS <br /> NRO. 1564741593
        </p>
        <p className="text-left md:text-center leading-snug  text-opacity2 font-bold font-primary text-sm pb-6 px-4 ml-6">
          LAS ARAUCARIAS <br /> NRO. 02227590019
        </p>
        <p className="text-left md:text-center leading-snug  text-cta font-semibold font-primary text-sm pb-6 px-4">
          UN MICRO VA A SALIR DESDE CAPITAL Y RAMOS MEJIA <br /> SI QUERES
          SUMARTE COMPLETA TUS DATOS ASÍ TE <br />
          ESCRIBINOS PARA COORDINAR!
        </p>
        <FormTransport></FormTransport>

        <img
          className="absolute bottom-0 w-full z-30 translate-y-2 md:h-4 "
          src={LineaRoja}
          alt="linea roja"
        />
      </div>

      <div
        className="bg-cream pb-28 pt-36 md:py-32 px-4 relative adornoBG3 "
        id=""
      >
        <div className="">
          <h2 className="text-center font-medium  text-opacity2 font-title  text-5xl md:text-6xl pb-6">
            Que empiece la fiesta! los esperamos
          </h2>
          <img className="m-auto w-1/12  " src={Corazon} alt="corazón" />
        </div>
        <img
          className="absolute bottom-0 left-0 w-full translate-y-1/2 md:h-[20px] md:w-full "
          src={ArcosRojosInverso}
          alt="linea roja"
        />
      </div>
    </>
  );
}

export default App;
