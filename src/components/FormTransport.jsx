import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Box, Typography, FormControl } from "@mui/material";
import axios from "axios";
function FormTransport() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
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
      emailjs
        .sendForm("service_p275jaq", "template_e9nx4au", form.current, {
          publicKey: "gknjUentNBdJlAW7W",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
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
        </div>
      </Box>
    </>
  );
}

export { FormTransport };
