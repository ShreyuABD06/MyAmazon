const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HvzF8CklVXe73mMtIQlqXgqAWgncLccWUhrnrAwyXVPfi3mKlFPUM5oIFNyD0HAUcquldtZs5IjdPtYVjKiPQql00ySM1d9OF"
); // secret key of stripe

//API

//APP Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("Hello Shre"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits
    currency: "inr"
  });

  //OK Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

//Listen Command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-dff12/us-central1/api
