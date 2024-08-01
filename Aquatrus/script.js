function sendEmail(){
  Email.send({
    SecureToken: "a28fad65-e0a3-485e-8a92-b5b013d600b2",
    
    To : 'szabotas33@gmail.com',
    From : 'szabotas33@gmail.com',
    Subject: "Uj aquatrus levél",
    Body : "Név: " + document.getElementById('inputName').value + 
          "<br> Email: " + document.getElementById('inputEmail').value + 
          "<br> Telefonszám:" + document.getElementById('inputPhone').value + 
          "<br> Üzenet:" + document.getElementById('inputMessage').value
}).then(
  message => alert(message)
);
}

