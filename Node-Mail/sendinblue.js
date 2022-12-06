const Sib= require('sib-api-v3-sdk')
require('dotenv').config()

const client =Sib.ApiClient.instance;
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const transEmailApi = new Sib.TransactionalEmailsApi()   //for otp,verification...
const sender = {
    email: 'mohamedafsalkp321@gmail.com'   //Email used to create Sendin blue account
}

const reciever = [{email:'mohamedafsal321@gmail.com'}]

transEmailApi.sendTransacEmail({
    sender,
    to:reciever,
    subject: 'Testing Send in blue',
    textContent: ` Verification`
}).then(res=>console.log("success",res)).catch(err=>console.log("error",err))
