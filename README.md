All customers
Request = get requests to see all customers
Response { id: 1, name: ‘ } { id: 2, name: ‘ }
^ an array of customer objects

Single customer
Request GET /api/customers/1
Response { id: 1, name: ‘ }

Update a customer
Send http request to the end point
PUT /api/customers/1
Custom object should be in the body of the request
Response { id: 1, name: ‘ }

Delete a customer
DELETE / api/customer/1 request to the end point
Response { id: 1 }

Create a customer
http POST request
POST /api/customer
No id or address
Include customer object in the body of the request

The server gets this object and creates the customer for us

GET
GET
PUT
DELETE
POST

Building / exploring end-points with express, no DB work on this REPO
Installing nodemon to monitor changes

In terminal you can set `on port 5000`

To go along with
//////PORT//////
const port = process.env.PORT || 3010;
app.listen(port, () => {
console.log(`listening on port ${port}...`);
});

Nom joi
