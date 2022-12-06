//SENDGRID-MAILSERVICE-Account has been closed
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transporter =nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}))

const mail = async () => {
try{
console.log("sending....")
let res= await transporter.sendMail({
    to:'mohamedafsal321@gmail.com',
    from:'mohamedafsalkp321@gmail.com',
    subject:'Test',
    html:'<h2>Email recieved</h2>'
})
console.log("sent",res)

}catch(err){
    console.log(err)
}
}
mail()