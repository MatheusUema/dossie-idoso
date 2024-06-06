import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Typography, Stack, Link, Breadcrumbs } from "@mui/material";
import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import MainHeader from "components/MainHeader/MainHeader";
import Footer from "components/Footer/footer";

function SuccessRegisterAccount() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <>
      <MainHeader/>
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="#21005D" href="/">
            Home
          </Link>
          <Typography color="#21005D">Criar Conta</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container sx={{ marginBottom: 8, padding: 15 }}>
        <Typography variant="h6" align="center">
          Bem vindo,
        </Typography>
        <Typography variant="h6" align="center">
          {user.name}!
        </Typography>

        <Typography variant="h6" align="center">
          Conta criada com sucesso!
        </Typography>

        <Card
          sx={{
            backgroundColor: "#F7F2FA",
            padding: 25,
            borderRadius: 2,
            width: "100%",
            textAlign: "center",
            alignContent: "center",
            flexDirection: "column",
            variant: "outlined",
          }}
        >
          <Typography variant="h6" align="center">
            Agora você pode criar e editar conteúdo para o Dossiê Idoso!
          </Typography>
          <Stack spacing={2} direction="column">
            <Button variant="contained" onClick={(e) => navigate("/new-topic")}>
              Começar novo conteúdo!
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => navigate("/new-topic/example")}
            >
              Como criar conteúdo?
            </Button>
          </Stack>
        </Card>
      </Container>
      <Footer/>
    </>
  );
}

export default SuccessRegisterAccount;
