import app from "./app";

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.log(`Servidor rodando na porta ${port}`),
);

process.on("SIGINT", () => {
  server.close();
  console.log("Servidor finalizado!");
});
