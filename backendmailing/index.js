const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_API_KEY');


app.use(express.json());

app.post("/api/sendMail",async (req,res)=>{
    try {
        const msg = {
            to: 'reciever',
            from:'sender',
            subject: 'SUB',
            text:'BODY',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
          };
         const states = await sgMail.send(msg);
         res.send("Success")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
      

})



app.listen(5000,()=>console.log("Server Running"));