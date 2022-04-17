import { useState, useEffect } from "react";
import axios from "axios";
import {
  CssBaseline,
  Paper,
  Container,
  Grid,
  TextField,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { CardPokemon } from "./components/CardPokemon";

const App = () => {
  const [pokemon, setpokemon] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setname] = useState("");
  const [newPokemon, setnewPokemon] = useState({
    name: "",
    description: "",
    image: "",
    skills: "",
  });
  const filteredPokemons = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(name.toLowerCase())
  );
  const addPokemon = (e) => {
    const { name, value } = e.target;
    setnewPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loadData = async () => {
    try {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=10&limit=30")
        .then((data) => setpokemon(data.data.results));
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const InsertLocalStorage = () => {
    localStorage.setItem("newPokemon", JSON.stringify(newPokemon));
  };
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Button
          variant="contained"
          style={{
            margin: 10,
          }}
          onClick={() => setOpen(true)}
        >
          Agregar Pokemon
        </Button>
        <TextField
          label="Ingresa tu Pokemon"
          variant="filled"
          fullWidth
          onChange={(e) => setname(e.target.value)}
          style={{
            backgroundColor: "#FFF"
          }}
        />
        <Paper
          style={{
            marginTop: 20,
          }}
        >
          <Grid container spacing={2}>
            <CardPokemon data={filteredPokemons} />
          </Grid>
        </Paper>
      </Container>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Ingresa el Pokemon
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este pokemon se guardara en el localStorage
          </Typography>
          <TextField
            label="Nombre del pokemon"
            fullWidth
            name="name"
            variant="filled"
            onChange={addPokemon}
          />
          <TextField
            label="Descripcion del pokemon"
            fullWidth
            name="description"
            variant="filled"
            onChange={addPokemon}
          />
          <TextField
            label="Url de la pokemon"
            fullWidth
            name="image"
            variant="filled"
            helperText="El ejemplo de la URL es https://img.pokemondb.net/artwork/large/nombre_del_pokemon.jpg"
            onChange={addPokemon}
          />
          <TextField
            label="Habilidad de la pokemon"
            fullWidth
            name="skills"
            variant="filled"
            onChange={addPokemon}
          />
          <Button
            variant="contained"
            style={{
              margin: 10,
            }}
            onClick={InsertLocalStorage}
          >
            Insertar Pokemon
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default App;
