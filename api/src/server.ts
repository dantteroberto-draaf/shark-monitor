import express from 'express';
import cors from 'cors';
import routes from './routes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
  res.json({ message: 'API do Shark Monitor rodando!' });
});

const PORT = process.env.PORT || 3333;
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});