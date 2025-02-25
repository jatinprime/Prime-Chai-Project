import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//generally app.use() is used for middlewares 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//THIS IS USED TO ACCEPT JSON WITH SIZE LIMIT
app.use(express.json({limit: "16kb"}))

//this is used for url 
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//use to store files in server and like assets (like i have made public folder for that , thats why named "public")
app.use(express.static("public"))

//this is used to read and write on cookie taken from client (basically to perform the crud operations)
app.use(cookieParser())

//MIddleware -> To check the things before giving response and things stuff



//routes import 
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
//we write app.get and stuff , when we do everything like routing and controllers in the same , but now as we have segregatted the stuff in routes and controller , so this is the standard thing to use using app.use (like middleware syntax)
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }