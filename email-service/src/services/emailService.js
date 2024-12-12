const transporter = require("../config/mailConfig");
const { addToQueue } = require("../utils/queue");

const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  };

  await addToQueue("emailQueue", mailOptions);
};

const processEmailQueue = () => {
  const { processQueue } = require("../utils/queue");
  processQueue("emailQueue", async (job) => {
    try {
      await transporter.sendMail(job.data);
      console.log(`E-mail enviado para ${job.data.to}`);
    } catch (error) {
      console.error(`Erro ao enviar e-mail para ${job.data.to}:`, error);
    }
  });
};

module.exports = { sendEmail, processEmailQueue };
