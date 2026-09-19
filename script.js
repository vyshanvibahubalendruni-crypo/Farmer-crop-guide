/* =========================================
   FARMER CROP GUIDE
   JAVASCRIPT
========================================= */


/* =========================================
   LANGUAGE TRANSLATIONS
========================================= */

const translations = {

    en: {

        navTitle: "Farmer Crop Guide",
        navHome: "Home",
        navCropGuide: "Crop Guide",
        navSoilGuide: "Soil Guide",
        navTips: "Farming Tips",

        heroLabel: "SMART FARMING ASSISTANT",

        heroTitle:
            "Choose the Right Crop for Your Farm",

        heroDescription:
            "Get crop recommendations based on your season, soil type and water availability.",

        formLabel:
            "CROP RECOMMENDATION",

        formTitle:
            "Tell Us About Your Farm",

        formDescription:
            "Select the conditions of your farm to find suitable crops.",

        seasonLabel:
            "Farming Season",

        soilLabel:
            "Soil Type",

        waterLabel:
            "Water Availability",

        selectSeason:
            "Select Season",

        selectSoil:
            "Select Soil Type",

        selectWater:
            "Select Water Availability",

        kharif:
            "Kharif",

        rabi:
            "Rabi",

        summer:
            "Summer",

        blackSoil:
            "Black Soil",

        redSoil:
            "Red Soil",

        loamySoil:
            "Loamy Soil",

        claySoil:
            "Clay Soil",

        sandySoil:
            "Sandy Soil",

        low:
            "Low",

        medium:
            "Medium",

        high:
            "High",

        recommendButton:
            "🌱 Find Suitable Crops",

        footer:
            "🌾 Farmer Crop Guide — Smart Farming for Better Decisions",

        recommendations:
            "CROP RECOMMENDATIONS",

        suitable:
            "Suitable Crops for Your Farm",

        based:
            "Results are based on your selected season, soil and water availability.",

        match:
            "Match",

        duration:
            "Duration",

        details:
            "View Crop Details →",

        selectAll:
            "Please Select All Options",

        selectAllText:
            "Select season, soil type and water availability.",

        noCrop:
            "No Suitable Crop Found",

        noCropText:
            "Try selecting different farming conditions."

    },


    te: {

        navTitle:
            "రైతు పంట మార్గదర్శిని",

        navHome:
            "హోమ్",

        navCropGuide:
            "పంట మార్గదర్శిని",

        navSoilGuide:
            "నేల మార్గదర్శిని",

        navTips:
            "వ్యవసాయ సూచనలు",

        heroLabel:
            "స్మార్ట్ వ్యవసాయ సహాయకుడు",

        heroTitle:
            "మీ పొలానికి సరైన పంటను ఎంచుకోండి",

        heroDescription:
            "మీ సీజన్, నేల రకం మరియు నీటి లభ్యత ఆధారంగా సరైన పంటలను తెలుసుకోండి.",

        formLabel:
            "పంట సిఫార్సు",

        formTitle:
            "మీ పొలం గురించి తెలియజేయండి",

        formDescription:
            "సరైన పంటలను కనుగొనడానికి మీ పొలం పరిస్థితులను ఎంచుకోండి.",

        seasonLabel:
            "వ్యవసాయ సీజన్",

        soilLabel:
            "నేల రకం",

        waterLabel:
            "నీటి లభ్యత",

        selectSeason:
            "సీజన్ ఎంచుకోండి",

        selectSoil:
            "నేల రకాన్ని ఎంచుకోండి",

        selectWater:
            "నీటి లభ్యతను ఎంచుకోండి",

        kharif:
            "ఖరీఫ్",

        rabi:
            "రబీ",

        summer:
            "వేసవి",

        blackSoil:
            "నల్ల నేల",

        redSoil:
            "ఎర్ర నేల",

        loamySoil:
            "లోమీ నేల",

        claySoil:
            "బంకమట్టి నేల",

        sandySoil:
            "ఇసుక నేల",

        low:
            "తక్కువ",

        medium:
            "మధ్యస్థం",

        high:
            "ఎక్కువ",

        recommendButton:
            "🌱 సరైన పంటలను కనుగొనండి",

        footer:
            "🌾 రైతు పంట మార్గదర్శిని — మెరుగైన వ్యవసాయ నిర్ణయాల కోసం",

        recommendations:
            "పంట సిఫార్సులు",

        suitable:
            "మీ పొలానికి అనుకూలమైన పంటలు",

        based:
            "మీరు ఎంచుకున్న సీజన్, నేల మరియు నీటి లభ్యత ఆధారంగా ఫలితాలు చూపించబడుతున్నాయి.",

        match:
            "సరిపోలిక",

        duration:
            "కాల వ్యవధి",

        details:
            "పంట వివరాలు చూడండి →",

        selectAll:
            "అన్ని ఎంపికలను ఎంచుకోండి",

        selectAllText:
            "సీజన్, నేల రకం మరియు నీటి లభ్యతను ఎంచుకోండి.",

        noCrop:
            "అనుకూలమైన పంట కనుగొనబడలేదు",

        noCropText:
            "వేరే వ్యవసాయ పరిస్థితులను ఎంచుకుని ప్రయత్నించండి."

    },


    hi: {

        navTitle:
            "किसान फसल मार्गदर्शिका",

        navHome:
            "होम",

        navCropGuide:
            "फसल मार्गदर्शिका",

        navSoilGuide:
            "मिट्टी मार्गदर्शिका",

        navTips:
            "कृषि सुझाव",

        heroLabel:
            "स्मार्ट कृषि सहायक",

        heroTitle:
            "अपने खेत के लिए सही फसल चुनें",

        heroDescription:
            "मौसम, मिट्टी और पानी की उपलब्धता के आधार पर उपयुक्त फसलों की जानकारी प्राप्त करें।",

        formLabel:
            "फसल सुझाव",

        formTitle:
            "अपने खेत के बारे में बताएं",

        formDescription:
            "उपयुक्त फसल खोजने के लिए अपने खेत की परिस्थितियों का चयन करें।",

        seasonLabel:
            "कृषि मौसम",

        soilLabel:
            "मिट्टी का प्रकार",

        waterLabel:
            "पानी की उपलब्धता",

        selectSeason:
            "मौसम चुनें",

        selectSoil:
            "मिट्टी का प्रकार चुनें",

        selectWater:
            "पानी की उपलब्धता चुनें",

        kharif:
            "खरीफ",

        rabi:
            "रबी",

        summer:
            "गर्मी",

        blackSoil:
            "काली मिट्टी",

        redSoil:
            "लाल मिट्टी",

        loamySoil:
            "दोमट मिट्टी",

        claySoil:
            "चिकनी मिट्टी",

        sandySoil:
            "रेतीली मिट्टी",

        low:
            "कम",

        medium:
            "मध्यम",

        high:
            "अधिक",

        recommendButton:
            "🌱 उपयुक्त फसलें खोजें",

        footer:
            "🌾 किसान फसल मार्गदर्शिका — बेहतर कृषि निर्णयों के लिए",

        recommendations:
            "फसल सुझाव",

        suitable:
            "आपके खेत के लिए उपयुक्त फसलें",

        based:
            "परिणाम आपके चुने हुए मौसम, मिट्टी और पानी की उपलब्धता पर आधारित हैं।",

        match:
            "मिलान",

        duration:
            "अवधि",

        details:
            "फसल की जानकारी देखें →",

        selectAll:
            "सभी विकल्प चुनें",

        selectAllText:
            "मौसम, मिट्टी का प्रकार और पानी की उपलब्धता चुनें।",

        noCrop:
            "कोई उपयुक्त फसल नहीं मिली",

        noCropText:
            "कृपया अलग कृषि परिस्थितियों का चयन करके प्रयास करें।"

    }

};


/* =========================================
   CROP DATABASE
========================================= */

const crops = [

    {
        name: "Cotton",

        season: "kharif",

        soil: "black",

        water: "medium",

        duration: "150–180 days",

        image: "images/cotton.jpg",

        description:
            "Cotton grows well in warm conditions and is commonly cultivated in black soil."
    },

    {
        name: "Soybean",

        season: "kharif",

        soil: "black",

        water: "medium",

        duration: "90–120 days",

        image: "images/soybean.jpg",

        description:
            "Soybean is an important oilseed crop suitable for fertile and well-drained soil."
    },

    {
        name: "Groundnut",

        season: "kharif",

        soil: "red",

        water: "medium",

        duration: "100–120 days",

        image: "images/groundnut.jpg",

        description:
            "Groundnut grows well in light and well-drained soils."
    },

    {
        name: "Rice",

        season: "kharif",

        soil: "clay",

        water: "high",

        duration: "120–150 days",

        image: "images/rice.jpg",

        description:
            "Rice requires sufficient water and grows well in clay and water-retentive soil."
    },

    {
        name: "Maize",

        season: "kharif",

        soil: "loamy",

        water: "medium",

        duration: "90–120 days",

        image: "images/maize.jpg",

        description:
            "Maize grows well in fertile loamy soil with adequate moisture."
    },

    {
        name: "Wheat",

        season: "rabi",

        soil: "loamy",

        water: "medium",

        duration: "120–150 days",

        image: "images/wheat.jpg",

        description:
            "Wheat is commonly grown during the Rabi season in fertile, well-drained soil."
    },

    {
        name: "Chickpea",

        season: "rabi",

        soil: "black",

        water: "low",

        duration: "100–120 days",

        image: "images/chickpea.jpg",

        description:
            "Chickpea is a pulse crop that can perform well with relatively lower water availability."
    },

    {
        name: "Mustard",

        season: "rabi",

        soil: "loamy",

        water: "low",

        duration: "110–140 days",

        image: "images/mustard.jpg",

        description:
            "Mustard is an important oilseed crop that generally requires moderate to low irrigation."
    },

    {
        name: "Millet",

        season: "summer",

        soil: "sandy",

        water: "low",

        duration: "70–100 days",

        image: "images/millet.jpg",

        description:
            "Millets are hardy crops that can grow in relatively dry conditions."
    }

];


/* =========================================
   LANGUAGE PAGE
========================================= */

function showLanguagePage() {

    document
        .getElementById("welcomePage")
        .classList.remove("active");

    document
        .getElementById("languagePage")
        .classList.add("active");
}


/* =========================================
   SELECT LANGUAGE
========================================= */

function selectLanguage(language) {

    localStorage.setItem(
        "selectedLanguage",
        language
    );

    document
        .getElementById("languagePage")
        .classList.remove("active");

    document
        .getElementById("mainPage")
        .classList.add("active");

    document
        .getElementById("languageSelect")
        .value = language;

    applyLanguage(language);
}


/* =========================================
   CHANGE LANGUAGE
========================================= */

function changeLanguage(language) {

    localStorage.setItem(
        "selectedLanguage",
        language
    );

    applyLanguage(language);
}


/* =========================================
   APPLY LANGUAGE
========================================= */

function applyLanguage(language) {

    const t =
        translations[language];

    if (!t) {

        return;

    }


    document.getElementById("navTitle").textContent =
        t.navTitle;

    document.getElementById("navHome").textContent =
        t.navHome;

    document.getElementById("navCropGuide").textContent =
        t.navCropGuide;

    document.getElementById("navSoilGuide").textContent =
        t.navSoilGuide;

    document.getElementById("navTips").textContent =
        t.navTips;


    document.getElementById("heroLabel").textContent =
        t.heroLabel;

    document.getElementById("heroTitle").textContent =
        t.heroTitle;

    document.getElementById("heroDescription").textContent =
        t.heroDescription;


    document.getElementById("formLabel").textContent =
        t.formLabel;

    document.getElementById("formTitle").textContent =
        t.formTitle;

    document.getElementById("formDescription").textContent =
        t.formDescription;


    document.getElementById("seasonLabel").textContent =
        t.seasonLabel;

    document.getElementById("soilLabel").textContent =
        t.soilLabel;

    document.getElementById("waterLabel").textContent =
        t.waterLabel;


    /* Season options */

    const season =
        document.getElementById("season");

    season.options[0].text =
        t.selectSeason;

    season.options[1].text =
        t.kharif;

    season.options[2].text =
        t.rabi;

    season.options[3].text =
        t.summer;


    /* Soil options */

    const soil =
        document.getElementById("soilType");

    soil.options[0].text =
        t.selectSoil;

    soil.options[1].text =
        t.blackSoil;

    soil.options[2].text =
        t.redSoil;

    soil.options[3].text =
        t.loamySoil;

    soil.options[4].text =
        t.claySoil;

    soil.options[5].text =
        t.sandySoil;


    /* Water options */

    const water =
        document.getElementById("water");

    water.options[0].text =
        t.selectWater;

    water.options[1].text =
        t.low;

    water.options[2].text =
        t.medium;

    water.options[3].text =
        t.high;


    document
        .getElementById("recommendButton")
        .textContent =
        t.recommendButton;


    document
        .getElementById("footerText")
        .textContent =
        t.footer;
}


/* =========================================
   FIND CROPS
========================================= */

function findCrops() {

    const season =
        document.getElementById("season").value;

    const soil =
        document.getElementById("soilType").value;

    const water =
        document.getElementById("water").value;


    const results =
        document.getElementById("results");


    const language =
        localStorage.getItem("selectedLanguage")
        || "en";

    const t =
        translations[language];


    if (!season || !soil || !water) {

        results.innerHTML = `

            <div class="no-result">

                <div class="big-icon">
                    ⚠️
                </div>

                <h2>
                    ${t.selectAll}
                </h2>

                <p>
                    ${t.selectAllText}
                </p>

            </div>

        `;

        return;
    }


    const recommendations =
        crops.map(crop => {

            let score = 0;


            if (crop.season === season) {

                score += 33.33;

            }


            if (crop.soil === soil) {

                score += 33.33;

            }


            if (crop.water === water) {

                score += 33.34;

            }


            return {

                ...crop,

                score:
                    Math.round(score)

            };

        });


    const suitableCrops =
        recommendations

            .filter(
                crop =>
                    crop.score > 0
            )

            .sort(
                (a, b) =>
                    b.score - a.score
            );


    if (suitableCrops.length === 0) {

        results.innerHTML = `

            <div class="no-result">

                <div class="big-icon">
                    🌱
                </div>

                <h2>
                    ${t.noCrop}
                </h2>

                <p>
                    ${t.noCropText}
                </p>

            </div>

        `;

        return;
    }


    let html = `

        <div class="results-title">

            <p class="section-label">
                ${t.recommendations}
            </p>

            <h2>
                ${t.suitable}
            </h2>

            <p>
                ${t.based}
            </p>

        </div>


        <div class="results-grid">

    `;


    suitableCrops.forEach(crop => {

        html += `

            <div
                class="result-card"
                style="
                    background-image:
                    url('${crop.image}');
                "
            >

                <div class="result-overlay">

                    <span class="match-badge">

                        ${crop.score}%
                        ${t.match}

                    </span>


                    <h3>
                        🌿 ${getCropName(
                            crop.name,
                            language
                        )}
                    </h3>


                    <p>
                        ${getCropDescription(
                            crop.name,
                            language
                        )}
                    </p>


                    <div class="duration">

                        ⏱️
                        ${t.duration}:
                        ${crop.duration}

                    </div>


                    <a
                        href="
                        crop-details.html?crop=
                        ${encodeURIComponent(crop.name)}
                        "
                        class="details-button"
                    >

                        ${t.details}

                    </a>

                </div>

            </div>

        `;

    });


    html += `

        </div>

    `;


    results.innerHTML = html;
}


/* =========================================
   CROP NAMES
========================================= */

function getCropName(
    name,
    language
) {

    const names = {

        Cotton: {

            en: "Cotton",

            te: "పత్తి",

            hi: "कपास"

        },

        Soybean: {

            en: "Soybean",

            te: "సోయాబీన్",

            hi: "सोयाबीन"

        },

        Groundnut: {

            en: "Groundnut",

            te: "వేరుశెనగ",

            hi: "मूंगफली"

        },

        Rice: {

            en: "Rice",

            te: "వరి",

            hi: "चावल"

        },

        Maize: {

            en: "Maize",

            te: "మొక్కజొన్న",

            hi: "मक्का"

        },

        Wheat: {

            en: "Wheat",

            te: "గోధుమ",

            hi: "गेहूँ"

        },

        Chickpea: {

            en: "Chickpea",

            te: "శనగ",

            hi: "चना"

        },

        Mustard: {

            en: "Mustard",

            te: "ఆవాలు",

            hi: "सरसों"

        },

        Millet: {

            en: "Millet",

            te: "సజ్జలు",

            hi: "बाजरा"

        }

    };


    return names[name]?.[language]
        || name;
}


/* =========================================
   CROP DESCRIPTIONS
========================================= */

function getCropDescription(
    name,
    language
) {

    const descriptions = {

        Cotton: {

            en:
                "Cotton grows well in warm conditions and is commonly cultivated in black soil.",

            te:
                "పత్తి వెచ్చని వాతావరణంలో బాగా పెరుగుతుంది మరియు నల్ల నేలలో సాధారణంగా సాగు చేస్తారు.",

            hi:
                "कपास गर्म परिस्थितियों में अच्छी तरह बढ़ता है और आमतौर पर काली मिट्टी में उगाया जाता है।"

        },

        Soybean: {

            en:
                "Soybean is an important oilseed crop suitable for fertile and well-drained soil.",

            te:
                "సోయాబీన్ ముఖ్యమైన నూనెగింజ పంట. ఇది సారవంతమైన మరియు మంచి నీటి పారుదల ఉన్న నేలలో బాగా పెరుగుతుంది.",

            hi:
                "सोयाबीन एक महत्वपूर्ण तिलहन फसल है जो उपजाऊ और अच्छी जल निकासी वाली मिट्टी के लिए उपयुक्त है।"

        },

        Groundnut: {

            en:
                "Groundnut grows well in light and well-drained soils.",

            te:
                "వేరుశెనగ తేలికపాటి మరియు మంచి నీటి పారుదల ఉన్న నేలల్లో బాగా పెరుగుతుంది.",

            hi:
                "मूंगफली हल्की और अच्छी जल निकासी वाली मिट्टी में अच्छी तरह बढ़ती है।"

        },

        Rice: {

            en:
                "Rice requires sufficient water and grows well in clay and water-retentive soil.",

            te:
                "వరి పంటకు తగినంత నీరు అవసరం మరియు బంకమట్టి, నీటిని నిల్వ చేసే నేలలో బాగా పెరుగుతుంది.",

            hi:
                "चावल की फसल को पर्याप्त पानी की आवश्यकता होती है और यह चिकनी तथा पानी रोकने वाली मिट्टी में अच्छी तरह बढ़ती है।"

        },

        Maize: {

            en:
                "Maize grows well in fertile loamy soil with adequate moisture.",

            te:
                "మొక్కజొన్న తగినంత తేమ ఉన్న సారవంతమైన లోమీ నేలలో బాగా పెరుగుతుంది.",

            hi:
                "मक्का पर्याप्त नमी वाली उपजाऊ दोमट मिट्टी में अच्छी तरह बढ़ता है।"

        },

        Wheat: {

            en:
                "Wheat is commonly grown during the Rabi season in fertile, well-drained soil.",

            te:
                "గోధుమలను సాధారణంగా రబీ సీజన్‌లో సారవంతమైన మరియు మంచి నీటి పారుదల ఉన్న నేలలో సాగు చేస్తారు.",

            hi:
                "गेहूँ आमतौर पर रबी मौसम में उपजाऊ और अच्छी जल निकासी वाली मिट्टी में उगाया जाता है।"

        },

        Chickpea: {

            en:
                "Chickpea is a pulse crop that can perform well with relatively lower water availability.",

            te:
                "శనగ తక్కువ నీటి లభ్యతతో కూడా బాగా పెరిగే పప్పు పంట.",

            hi:
                "चना एक दलहन फसल है जो अपेक्षाकृत कम पानी की उपलब्धता में भी अच्छी तरह उग सकती है।"

        },

        Mustard: {

            en:
                "Mustard is an important oilseed crop that generally requires moderate to low irrigation.",

            te:
                "ఆవాలు ముఖ్యమైన నూనెగింజ పంట. దీనికి సాధారణంగా మధ్యస్థం నుండి తక్కువ నీటిపారుదల అవసరం.",

            hi:
                "सरसों एक महत्वपूर्ण तिलहन फसल है जिसे आमतौर पर मध्यम से कम सिंचाई की आवश्यकता होती है।"

        },

        Millet: {

            en:
                "Millets are hardy crops that can grow in relatively dry conditions.",

            te:
                "సజ్జలు తక్కువ నీరు ఉన్న పొడి పరిస్థితుల్లో కూడా పెరగగల బలమైన పంటలు.",

            hi:
                "बाजरा ऐसी मजबूत फसल है जो अपेक्षाकृत सूखी परिस्थितियों में भी उग सकती है।"

        }

    };


    return descriptions[name]?.[language]
        || "";
}