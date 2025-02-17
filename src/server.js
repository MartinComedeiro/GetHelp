const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  const helpRequests = [
    {
      image: "dana.png", title: "Ayuda limpiando casa",
      distance: "15 kilómetros de casa",
      description: "Casa inundada por la DANA en Valencia"
    },
    {
      image: "placeholder.jpg", title: "Punto de recogida de alimentos",
      distance: "1.5 kilómetros de casa",
      description: "Recogida de alimentos para ayudar en Valencia"
    }
  ];
  
  res.render("index", { helpRequests });
});

app.listen(PORT, () => {
  console.log();
});
