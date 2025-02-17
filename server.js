const express = require('express');
const app = express();
const PORT = 3000;

app.get('/signup',(req,res)=>{
    const{Username , password, email, dateOfBirth} = req.query;

    if(Username){
      for(let i = 0; i<Username.length ; i++){
        if(!((Username[i]>= 'a' && Username[i]<='z') || (Username[i]>= 'A' && Username[i]<='B'))){
            return req.send("Username can not be empty");
        }
      }
    }

    if(email){
      if(!email.includes('@') || !email.includes('.')|| email.indexOf('@') > email.lastIndexOf('.')){
        return req.send("Email cannot be empty");
      }
    }

    if (password){
      if (password.length < 8){
        return req.send("Password length should be greater than 8 or less than or equal to 16");
      }
    }
   
    if(dateOfBirth){
        const Birth_date = new dateOfBirth(dateOfBirth);
        const current_date = new Date();
    }
     res.send("Signedup Successfully");
});

app.listen(PORT , ()=> {
    console.log(`server is running on http://localhost:${PORT}`)
    });