import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Box, Typography, FormControl } from "@mui/material";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Puff } from "react-loader-spinner";
function FormTransport() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [puffloader, setPuffloader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Debe completar su nombre";
    if (!formData.phone) tempErrors.phone = "Debe completar el teléfono";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPuffloader(true);
      emailjs
        .sendForm("service_c3rsmto", "template_yqb8gsd", form.current, {
          publicKey: "YlsROYeZk6KshWiHf",
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
        <label htmlFor="name" className="font-normal text-dark font-primary">
          Nombre y Apellido
        </label>
        <input type="hidden" name="to_name" value={"Cami y Nico"} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="*NOMBRE Y APELLIDO"
          required
          className="bg-cta text-white rounded-md font-primary p-2 w-11/12"
        />
        {errors.name && <Typography color="error">{errors.name}</Typography>}

        <label htmlFor="phone" className="font-normal text-dark font-primary">
          Teléfono
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="*NRO. DE TELEFONO"
          required
          className="bg-cta text-white rounded-md font-primary p-2 w-11/12"
        />
        {errors.phone && <Typography color="error">{errors.phone}</Typography>}
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

export { FormTransport };
