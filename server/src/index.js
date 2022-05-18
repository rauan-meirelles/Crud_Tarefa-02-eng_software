import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req, res) => {
    const {name, cost, category} = req.body;
    const movie = await prisma.movie.create({
        data: {
            name: name,
            cost: cost,
            category: category,
        },
    });
    res.json(movie);
});

app.post("/createManyMovies", async (req, res) => {
    const { moviesList } = req.body;
    const movies = await prisma.movie.createMany({
        data: moviesList,
    });
    res.json(movies);
});

app.get("/", async (req, res) => {
    const movies = await prisma.movie.findMany();
    res.json(movies);
});

app.get("/ById/:id", async (req, res) => {
    const id = req.params.id;
    const movie = await prisma.movie.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(movie);
});

app.put("/", async (req, res) => {
    const {id, name, cost, category} = req.body;
    const updateMovie = await prisma.movie.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            cost: cost,
            category: category,
        },
    });
    res.json(updateMovie);
});

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deleteMovie = await prisma.movie.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(deleteMovie);
})

app.listen(3001, () => {
    console.log("Server Running")
})