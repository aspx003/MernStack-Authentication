import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

connectDB();

const port = process.env.PORT || 5000;

const app = express();
app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send('Sever is ready!'));

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
	console.log(`Sever started at port ${port}`);
})