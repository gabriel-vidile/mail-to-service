const { generateToken } = require("../services/authService");

const login = (req, res) => {
  const { email, password } = req.body;
  // Valide o usuário conforme sua lógica de autenticação
  const user = { id: 1, email }; // Exemplo de usuário autenticado
  const token = generateToken(user);
  res.json({ token });
};

module.exports = { login };
