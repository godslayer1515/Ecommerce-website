const express = require("express")
const app = express()
const errorMiddleware = require("./Middleware/error")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload")

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true   }))
app.use(fileUpload())

// Route imports
const product = require('./Routes/productRoutes')
const user = require("./Routes/userRoutes")
const order = require('./Routes/orderRoutes')


app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
// error handler middleware
app.use(errorMiddleware)

module.exports = app