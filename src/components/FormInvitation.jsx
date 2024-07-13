import React, { useRef, useState } from "react";
import { Button, Box, Typography, FormControl } from "@mui/material";
import LineaVerde from "../assets/imgs/linea-verde-vertical.svg";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Puff } from "react-loader-spinner";
function FormInvitation() {
  const [formData, setFormData] = useState({
    name: "",
    confirmation: "",
    menu: "",
  });

  const [errors, setErrors] = useState({});
  const [puffloader, setPuffloader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData, [name]: value };
      if (name === "confirmation" && value === "no") {
        newFormData.menu = "";
      }
      return newFormData;
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Debe completar su nombre";
    if (!formData.confirmation)
      tempErrors.confirmation = "Debe seleccionar una opción";
    if (formData.confirmation === "si" && !formData.menu)
      tempErrors.menu = "Debe seleccionar una opción";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPuffloader(true);
      emailjs
        .sendForm("service_cofib0p", "template_27kpno4", form.current, {
          publicKey: "2YdH4YcH7fHBQKsPu",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("¡Mensaje Enviado!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
              theme: "light",
              transition: Slide,
            });
            form.current.reset();
            setFormData({ name: "", phone: "" });
            setPuffloader(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("¡Error al enviar!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 0,
              theme: "light",
              transition: Slide,
            });
            setPuffloader(false);
          }
        );
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: 400,
          mx: "auto",
          p: 2,
        }}
        onSubmit={handleSubmit}
        ref={form}
        noValidate
        className="relative md:static"
      >
        <img
          className="absolute w-3 -bottom-24 right-1 z-50 "
          src={LineaVerde}
          alt="linea verde"
        />
        <FormControl component="fieldset" error={!!errors.confirmation}>
          <h3 className="text-left font-semibold text-cta font-primary text-2xl pb-4 ">
            ¿Podés venir?
          </h3>

          <div className="flex items-center gap-2">
            <label
              htmlFor="si"
              className="text-cta font-semibold font-primary cursor-pointer"
            >
              SI
            </label>
            <input
              type="radio"
              id="si"
              name="confirmation"
              value="si"
              onChange={handleChange}
              className="mr-4"
            />
            <label
              htmlFor="no"
              className="text-cta font-semibold font-primary cursor-pointer"
            >
              NO
            </label>
            <input
              type="radio"
              id="no"
              name="confirmation"
              value="no"
              onChange={handleChange}
            />
          </div>
          {errors.confirmation && (
            <Typography color="error">{errors.confirmation}</Typography>
          )}
        </FormControl>
        <label htmlFor="menu" className="font-normal text-dark font-primary">
          Nombre y Apellido
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Escriba su nombre"
          required
          className="bg-cta text-white rounded-md font-primary p-2 w-11/12"
        />
        {errors.name && <Typography color="error">{errors.name}</Typography>}

        <FormControl fullWidth error={!!errors.menu}>
          <label htmlFor="menu" className="font-normal text-dark font-primary">
            Menú invitados
          </label>

          <select
            name="menu"
            value={formData.menu}
            onChange={handleChange}
            className="bg-cta rounded-md text-white py-2 font-primary w-11/12"
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            <option value="Tradicional">Tradicional</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Vegano">Vegano</option>
            <option value="Celiaco">Celíaco</option>
          </select>

          {errors.menu && <Typography color="error">{errors.menu}</Typography>}
        </FormControl>

        <div className="flex justify-center">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {puffloader ? (
            <Puff
              className="m-auto"
              visible={puffloader}
              height="80"
              width="80"
              color="#c7b65e"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <Button
              variant="contained"
              className="w-1/2"
              sx={{
                backgroundColor: "#575756",
                "&:hover": { backgroundColor: "#575756" },
                marginBlock: "1rem",
              }}
              type="submit"
            >
              Enviar
            </Button>
          )}
        </div>
      </Box>
    </>
  );
}

export { FormInvitation };
