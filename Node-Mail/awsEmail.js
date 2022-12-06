const AWS =require('aws-sdk')
const env=require("dotenv")
// const {nanoid} = require("nanoid");
const { SendTestEmail } = require('sib-api-v3-sdk');
env.config();
const AWSAccessKeyId='AKIASBBOY6VOOEIQ3LTY'
const AWSSecretKey='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'

const awsConfig= {
    accessKeyId:AWSAccessKeyId,
    secretAccessKey:AWSSecretKey,
    region:'ap-northeast-1'

}

const SES = new AWS.SES(awsConfig)


const sendEmail = async () => {
    const email='EventMs@afsolutions321.com'
    const shortCode = '12345'              //nanoid(6).toUpperCase()
    try {
        //prepare email
        const params = {
            Source:email,
            Destination: {
                ToAddresses: ['sam.v@deepnetsoft.com']
            },
            Message:{
                Subject: {
                    Data:`OTP verification`
                },
                Body: {
                    Html: {
                        Charset:"UTF-8",
                        Data:`Your verification code is ${shortCode}`
                    }
                }
            }
        }
    

        const emailSent =  SES.sendEmail(params).promise();
        emailSent.then(function(data){console.log("Email sent successfully",data)})
        .catch(err=>{console.log(err)})
        // const emailSent = await SES.sendEmail(params)
        // emailSent((data,err)=>{
        //     if(data){console.log("Email sent successfully",data)}
        //     if(err){throw(err)}

        // })
            
        


    }catch(err){
        console.log(err)

    }
}

module.exports = sendEmail;


