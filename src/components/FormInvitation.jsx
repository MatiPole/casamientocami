import React, { useState } from "react";
import { Button, Box, Typography, FormControl } from "@mui/material";
import LineaVerde from "../assets/imgs/linea-verde-vertical.svg";

function FormInvitation() {
  const [formData, setFormData] = useState({
    name: "",
    confirmation: "",
    menu: "",
  });

  const [errors, setErrors] = useState({});

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
    if (!formData.confirmation)
      tempErrors.confirmation = "Debe seleccionar una opción";
    if (!formData.menu) tempErrors.menu = "Debe seleccionar una opción";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
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

export { FormInvitation };
