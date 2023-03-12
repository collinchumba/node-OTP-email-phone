const axios = require("axios");

async function send() {
  const response = await axios.post(
    "https://api.mobilesasa.com/v1/send/message",
    '{\n    "senderID": "MOBILESASA",\n    "message": "Dea, thanks for shopping with us! Bonus of 44 added to your a/c.",\n    "phone": "2547XXXXX"\n}',
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer ",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log(response);
}
send();
