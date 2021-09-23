//for stripe to get client secret
require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)
//domain/.netlify/functions/create-payment-intent



exports.handler = async function(event,context){
    if(event.body){
        const {cart,shippingfee,totalamount} = JSON.parse(event.body)
    //console.log(cart);
        const calculateOrderAmount = () =>{
            return shippingfee + totalamount
        }
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount:calculateOrderAmount(),
                currency:'usd'
            })
            return {
                statusCode:200,
                body:JSON.stringify({
                    clientSecret:paymentIntent.client_secret
                })
            }
        }catch(error){
            return {
                statusCode:500,
                body:JSON.stringify({
                    error:error.message
                })
            }
        }
        
    
    }
    return {
        statusCode:200,
        body:'Create payment intent'
    }
    
}