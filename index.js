import express from "express";

const app = express();
app.use(express.json());

// Endpoint do webhook
app.post("/webhook", (req, res) => {
  console.log("Dados recebidos do webhook:", req.body);
  res.sendStatus(200); // responde OK
});

// Endpoint simples para testar
app.get("/", (req, res) => {
  res.send("Webhook ativo 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta 3000");
});
