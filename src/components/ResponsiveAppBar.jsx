import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DibujoCopas from "../assets/imgs/dibujo-copas.png";
const pages = [
  { title: "Inicio", link: "#inicio" },
  { title: "Mapa", link: "#map" },
  { title: "Regalos", link: "#regalos" },
  { title: "Asistencia", link: "#asistencia" },
  { title: "Dresscode", link: "#dresscode" },
  { title: "Hospedaje", link: "#hospedaje" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute("href"));
      let offset = 64; // Altura de tu AppBar
      let targetPosition = target.getBoundingClientRect().top;
      let offsetPosition = targetPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#f2ede7", top: 0, zIndex: 100 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 40, // Ajusta el tamaño de la imagen según sea necesario
              mr: 1,
            }}
            alt="Logo"
            src={DibujoCopas}
          />

          <Box
            sx={{
              color: "#282828",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography
                    component="a"
                    href={page.link}
                    textAlign="center"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none", mr: 1 },
              height: 30, // Ajusta el tamaño de la imagen según sea necesario
              mr: 1,
            }}
            alt="Logo"
            src={DibujoCopas}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component="a"
                href={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#282828", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { ResponsiveAppBar };
