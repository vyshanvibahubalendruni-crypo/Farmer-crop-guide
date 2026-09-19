const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./farmer.db");

db.serialize(() => {

    // ================= CROPS TABLE =================

    db.run(`
        CREATE TABLE IF NOT EXISTS crops (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            season TEXT NOT NULL,
            soil TEXT NOT NULL,
            water TEXT NOT NULL,
            duration TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL
        )
    `);


    // ================= SOILS TABLE =================

    db.run(`
        CREATE TABLE IF NOT EXISTS soils (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            suitable_crops TEXT NOT NULL,
            image TEXT NOT NULL
        )
    `);


    // ================= TIPS TABLE =================

    db.run(`
        CREATE TABLE IF NOT EXISTS tips (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL
        )
    `);


    // Check if crops already exist
    db.get(`SELECT COUNT(*) AS count FROM crops`, (err, row) => {

        if (err) {
            console.log(err);
            return;
        }

        if (row.count === 0) {

            const crops = [

                [
                    "Cotton",
                    "kharif",
                    "black",
                    "medium",
                    "150-180 days",
                    "Cotton grows well in warm conditions and black soil.",
                    "images/cotton.jpg"
                ],

                [
                    "Soybean",
                    "kharif",
                    "black",
                    "medium",
                    "90-120 days",
                    "Soybean grows well in black soil with moderate water.",
                    "images/soybean.jpg"
                ],

                [
                    "Groundnut",
                    "kharif",
                    "red",
                    "medium",
                    "100-120 days",
                    "Groundnut grows well in red soil and moderate water.",
                    "images/groundnut.jpg"
                ],

                [
                    "Rice",
                    "kharif",
                    "clay",
                    "high",
                    "120-150 days",
                    "Rice requires clay soil and good water availability.",
                    "images/rice.jpg"
                ],

                [
                    "Maize",
                    "kharif",
                    "loamy",
                    "medium",
                    "90-120 days",
                    "Maize grows well in fertile loamy soil.",
                    "images/maize.jpg"
                ],

                [
                    "Wheat",
                    "rabi",
                    "loamy",
                    "medium",
                    "120-150 days",
                    "Wheat grows well in loamy soil during the rabi season.",
                    "images/wheat.jpg"
                ],

                [
                    "Chickpea",
                    "rabi",
                    "black",
                    "low",
                    "100-120 days",
                    "Chickpea can grow with low water availability.",
                    "images/chickpea.jpg"
                ],

                [
                    "Mustard",
                    "rabi",
                    "loamy",
                    "low",
                    "110-140 days",
                    "Mustard grows well in loamy soil with low water.",
                    "images/mustard.jpg"
                ],

                [
                    "Millet",
                    "summer",
                    "sandy",
                    "low",
                    "70-100 days",
                    "Millet is suitable for sandy soil and low water availability.",
                    "images/millet.jpg"
                ]

            ];


            const statement = db.prepare(`
                INSERT INTO crops
                (name, season, soil, water, duration, description, image)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);

            crops.forEach(crop => {
                statement.run(crop);
            });

            statement.finalize();

            console.log("Crops inserted successfully.");
        }
    });


    // ================= SOIL DATA =================

    db.get(`SELECT COUNT(*) AS count FROM soils`, (err, row) => {

        if (err) {
            console.log(err);
            return;
        }

        if (row.count === 0) {

            const soils = [

                [
                    "Black Soil",
                    "Black soil is rich in nutrients and is highly suitable for crops such as cotton and soybean.",
                    "Cotton, Soybean, Chickpea",
                    "images/black-soil.jpg"
                ],

                [
                    "Red Soil",
                    "Red soil is suitable for crops that need good drainage.",
                    "Groundnut",
                    "images/red-soil.jpg"
                ],

                [
                    "Loamy Soil",
                    "Loamy soil is fertile and suitable for many agricultural crops.",
                    "Maize, Wheat, Mustard",
                    "images/loamy-soil.jpg"
                ],

                [
                    "Clay Soil",
                    "Clay soil holds water well and is suitable for rice cultivation.",
                    "Rice",
                    "images/clay-soil.jpg"
                ],

                [
                    "Sandy Soil",
                    "Sandy soil has good drainage and is suitable for drought-tolerant crops.",
                    "Millet",
                    "images/sandy-soil.jpg"
                ]

            ];


            const statement = db.prepare(`
                INSERT INTO soils
                (name, description, suitable_crops, image)
                VALUES (?, ?, ?, ?)
            `);

            soils.forEach(soil => {
                statement.run(soil);
            });

            statement.finalize();

            console.log("Soils inserted successfully.");
        }
    });


    // ================= FARMING TIPS =================

    db.get(`SELECT COUNT(*) AS count FROM tips`, (err, row) => {

        if (err) {
            console.log(err);
            return;
        }

        if (row.count === 0) {

            const tips = [

                [
                    "Choose the Right Crop",
                    "Select crops according to your soil type, season and water availability."
                ],

                [
                    "Use Quality Seeds",
                    "Always use healthy and certified seeds for better crop growth."
                ],

                [
                    "Manage Water Properly",
                    "Avoid over-irrigation and provide water according to crop requirements."
                ],

                [
                    "Control Weeds",
                    "Remove weeds regularly because they compete with crops for nutrients and water."
                ],

                [
                    "Monitor Your Crops",
                    "Regularly check crops for pests, diseases and nutrient deficiencies."
                ]

            ];


            const statement = db.prepare(`
                INSERT INTO tips
                (title, description)
                VALUES (?, ?)
            `);

            tips.forEach(tip => {
                statement.run(tip);
            });

            statement.finalize();

            console.log("Tips inserted successfully.");
        }
    });

});

module.exports = db;