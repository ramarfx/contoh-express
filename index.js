import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Halo ini rama"
  })
})

app.get('/login', (req, res) => {
  res.json({
    message: "login berhasil"
  })
})

app.post('/user', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: "user berhasil dibuat",
    data: {
      id: 1,
      nama: body.nama,
      umur: body.umur
    }
  })
})

app.get('/user', (req, res) => {
  res.status(200).json({
    message: "user berhasil diambil",
    data: {
      id: 1,
      nama: "rama baru"
    }
  })
})

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
