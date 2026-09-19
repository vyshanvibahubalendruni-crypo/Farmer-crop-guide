const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./database");

const app = express();

const PORT = 3000;


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());


// ================= FRONTEND =================

app.use(express.static(path.join(__dirname, "..")));


// ================= HOME API =================

app.get("/api", (req, res) => {

    res.json({
        message: "Farmer Crop Guide API is running successfully."
    });

});


// ================= GET ALL CROPS =================

app.get("/api/crops", (req, res) => {

    db.all(
        `SELECT * FROM crops`,
        [],
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    error: "Unable to fetch crops"
                });

            }

            res.json(rows);

        }
    );

});


// ================= CROP RECOMMENDATION =================

app.get("/api/crops/recommend", (req, res) => {

    const {
        season,
        soil,
        water
    } = req.query;


    db.all(
        `SELECT * FROM crops`,
        [],
        (err, crops) => {

            if (err) {

                return res.status(500).json({
                    error: "Unable to fetch crops"
                });

            }


            const results = crops.map(crop => {

                let score = 0;


                if (
                    season &&
                    crop.season.toLowerCase() === season.toLowerCase()
                ) {
                    score += 33.33;
                }


                if (
                    soil &&
                    crop.soil.toLowerCase() === soil.toLowerCase()
                ) {
                    score += 33.33;
                }


                if (
                    water &&
                    crop.water.toLowerCase() === water.toLowerCase()
                ) {
                    score += 33.34;
                }


                return {
                    ...crop,
                    score: Math.round(score)
                };

            });


            results.sort((a, b) => b.score - a.score);


            res.json(results);

        }
    );

});


// ================= GET SINGLE CROP =================

app.get("/api/crops/:name", (req, res) => {

    const cropName = req.params.name;


    db.get(
        `SELECT * FROM crops WHERE LOWER(name) = LOWER(?)`,
        [cropName],
        (err, row) => {

            if (err) {

                return res.status(500).json({
                    error: "Unable to fetch crop"
                });

            }


            if (!row) {

                return res.status(404).json({
                    error: "Crop not found"
                });

            }


            res.json(row);

        }
    );

});


// ================= GET SOILS =================

app.get("/api/soils", (req, res) => {

    db.all(
        `SELECT * FROM soils`,
        [],
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    error: "Unable to fetch soils"
                });

            }


            res.json(rows);

        }
    );

});


// ================= GET TIPS =================

app.get("/api/tips", (req, res) => {

    db.all(
        `SELECT * FROM tips`,
        [],
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    error: "Unable to fetch tips"
                });

            }


            res.json(rows);

        }
    );

});


// ================= START SERVER =================

app.listen(PORT, "0.0.0.0", () => { 
 
    console.log("--------------------------------"); 
    console.log("Farmer Crop Guide Server Started"); 
    console.log(`http://localhost:${PORT}`); 
    console.log("--------------------------------"); 
 
});