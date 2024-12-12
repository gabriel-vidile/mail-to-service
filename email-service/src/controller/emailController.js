const { sendEmail } = require("../services/emailService");

const sendEmailHandler = async (req, res) => {
  const { to, subject, text, html } = req.body;

  try {
    const info = await sendEmail(to, subject, text, html);
    res.status(200).json({
      message: "E-mail enviado com sucesso!",
      info,
    });
  } catch (error) {
    res.status(500).json({
      message: "Falha ao enviar e-mail.",
      error: error.message,
    });
  }
};

module.exports = { sendEmailHandler };
