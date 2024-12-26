const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const movies = [
  // Unique Bollywood Movies
  {
    title: "Dangal",
    director: "Nitesh Tiwari",
    genre: "Biography",
    release_year: 2016,
    rating: 4.8,
    actor: "Aamir Khan",
    box_office_collection: 220,
  },
  {
    title: "Baahubali 2: The Conclusion",
    director: "S.S. Rajamouli",
    genre: "Action",
    release_year: 2017,
    rating: 4.7,
    actor: "Prabhas",
    box_office_collection: 181,
  },
  {
    title: "PK",
    director: "Rajkumar Hirani",
    genre: "Comedy",
    release_year: 2014,
    rating: 4.6,
    actor: "Aamir Khan",
    box_office_collection: 140,
  },
  {
    title: "Bajrangi Bhaijaan",
    director: "Kabir Khan",
    genre: "Drama",
    release_year: 2015,
    rating: 4.5,
    actor: "Salman Khan",
    box_office_collection: 130,
  },
  {
    title: "Sultan",
    director: "Ali Abbas Zafar",
    genre: "Drama",
    release_year: 2016,
    rating: 4.3,
    actor: "Salman Khan",
    box_office_collection: 120,
  },
  {
    title: "Sanju",
    director: "Rajkumar Hirani",
    genre: "Biography",
    release_year: 2018,
    rating: 4.4,
    actor: "Ranbir Kapoor",
    box_office_collection: 120,
  },
  {
    title: "Padmaavat",
    director: "Sanjay Leela Bhansali",
    genre: "Drama",
    release_year: 2018,
    rating: 4.2,
    actor: "Ranveer Singh",
    box_office_collection: 112,
  },
  {
    title: "3 Idiots",
    director: "Rajkumar Hirani",
    genre: "Comedy",
    release_year: 2009,
    rating: 4.9,
    actor: "Aamir Khan",
    box_office_collection: 202,
  },
];

app.get("/movies", (req, res) => {
  res.json({ movies: movies });
});

app.get("/", (req, res) => {
  res.send("Hey!, This is Sudhir(bd7-chap3-sec2-SD1)");
});

app.listen(3000, () => {
  console.log(`App is listening at port 3000`);
});
