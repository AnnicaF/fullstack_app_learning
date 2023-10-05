const express = require('express')
const jwt = require('jsonwebtoken');
const port = 8081; 
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/sso', (req, res) => {
    const token = req.query.ssoToken;
    const privateKey = 'e389bb7b-dc58-4b0b-8f54-dac159d5a609';

    try {
        const decoded = jwt.verify(token, privateKey);

        const userData = {
            avatarURL: decoded.avatarURL || '',
             email: decoded.email || '',
            id: decoded.id || '',
            name: decoded.name || '',
        };
        
        res.json({sucess: true, user:userData});
    }catch (err) {
        console.error('JWT-validation mislykkedes:', err);
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
 });

 app.get('/login', (req, res) => {
    // Konstruer SSO URL med returnURL parameter
    const companyID = 'ucl_feedback_tool';
    const returnURL = encodeURIComponent('http://localhost:8081/home');
    const ssoURL = `https://webdock.io/en/login?companyID=${companyID}&redirect=${returnURL}`;
  
    // Viderestil brugeren til Webdock-login
    res.redirect(ssoURL);
  });

 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });