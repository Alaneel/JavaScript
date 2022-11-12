// testEmail.js
// npmp install -g nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', // qq
    port: 465, // SSL: 465, TLS: 587
    secure: true, // SSL
    auth: {
        user: '1270662610@qq.com',
        pass: 'hkgamxqcnkuehfci'
    }
});

const mailOptions = {
    from: '1270662610@qq.com',
    to: '1489212996@qq.com',
    subject: 'Sending Email using Node.js',
    text: '测试一波邮件群发啥的'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
})