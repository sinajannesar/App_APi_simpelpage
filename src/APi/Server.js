import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const dbPath = "./src/APi/database.json";


app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    return res
      .status(409)
      .json({ success: false, message: "Email is already registered." });
  }

  const newUser = { id: data.length + 1, name, email, password };
  data.push(newUser);

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  return res
    .status(201)
    .json({ success: true, message: "User registered successfully." });
});


app.get("/api/users", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  res.json(data);
});


app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required." });
  }

  
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  
  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password." });
  }

  return res
    .status(200)
    .json({ success: true, message: "Login successful.", user });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
