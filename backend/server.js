const express = require("express");
const path = require("path");
const QRCode = require("qrcode");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("/api/generate-qrcode", async (req, res) => {
  const text = req.query.text || "https://exemplo.com";
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text);
    res.json({ qrCodeDataUrl });
  } catch (err) {
    res.status(500).json({ error: "Erro ao gerar o QR Code" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
