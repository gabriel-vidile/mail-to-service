# Email Microservice com Node.js

Este projeto implementa um microserviço para envio de e-mails usando **Node.js**, **Nodemailer**, **Redis** e autenticação JWT.

---

## **1. Requisitos**

Certifique-se de ter os seguintes itens instalados em sua máquina:

- Node.js (v14 ou superior)
- Redis
- Um cliente de API para testes (Postman, Insomnia, cURL, etc.)

---

## **2. Configuração do Projeto**

### **2.1. Clonando o Repositório**

```bash
# Clone este repositório
https://github.com/seu-repositorio/email-microservice.git

# Navegue até o diretório
cd email-microservice
```

### **2.2. Instalando Dependências**

```bash
npm install
```

### **2.3. Configuração do Ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configurações do servidor SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha

# Configurações do Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=sua_senha_redis

# Configurações do JWT
JWT_SECRET=sua_chave_secreta

# Porta do servidor
PORT=3000
```

---

## **3. Estrutura do Projeto**

O projeto está organizado conforme a seguinte estrutura:

```
email-service/
├── src/
│   ├── config/          # Configurações de SMTP, Redis, JWT
│   ├── controllers/     # Controladores de rotas
│   ├── middlewares/     # Middleware de autenticação
│   ├── routes/          # Definições de rotas
│   ├── services/        # Lógica de negócios
│   ├── utils/           # Gerenciamento de filas
│   └── index.js         # Ponto de entrada
├── .env                 # Variáveis de ambiente
├── package.json         # Dependências do projeto
```

---

## **4. Funcionalidades**

- **Envio de e-mails:** Integração com SMTP para envio de e-mails.
- **Autenticação JWT:** Rotas protegidas por autenticação baseada em token.
- **Fila com Redis:** Processamento assíncrono de envio de e-mails.

---

## **5. Executando o Projeto**

### **5.1. Inicie o Redis**

Certifique-se de que o Redis está em execução na porta configurada:

```bash
redis-server
```

### **5.2. Inicie o Microserviço**

```bash
npm start
```

O servidor estará em execução em `http://localhost:3000`.

---

## **6. Rotas Disponíveis**

### **6.1. Autenticação**

**Rota:** `/api/auth/login`  
**Método:** `POST`  

**Exemplo de Corpo da Requisição:**

```json
{
  "email": "usuario@example.com",
  "password": "sua_senha"
}
```

**Resposta de Sucesso:**

```json
{
  "token": "seu_token_jwt"
}
```

### **6.2. Envio de E-mails**

**Rota:** `/api/emails/send`  
**Método:** `POST`  
**Autenticação:** Necessário incluir o token JWT no cabeçalho `Authorization`.

**Exemplo de Corpo da Requisição:**

```json
{
  "to": "destinatario@example.com",
  "subject": "Assunto do E-mail",
  "text": "Corpo do e-mail em texto simples.",
  "html": "<p>Corpo do e-mail em HTML.</p>"
}
```

**Resposta de Sucesso:**

```json
{
  "message": "E-mail enviado com sucesso!",
  "info": {
    "accepted": ["destinatario@example.com"],
    "response": "250 OK"
  }
}
```

---

## **7. Considerações de Segurança**

- **Senhas e Segredos:** Nunca exponha suas credenciais ou chaves em código-fonte público. Use variáveis de ambiente.
- **TLS:** Certifique-se de usar conexões seguras (como TLS) ao configurar seu SMTP.

---

## **8. Próximos Passos**

- **Monitoramento:** Adicione ferramentas como Winston para logs e métricas.
- **Escalabilidade:** Integre com serviços de filas mais robustos, como RabbitMQ ou Amazon SQS.
- **Testes:** Adicione testes automatizados usando ferramentas como Mocha ou Jest.
