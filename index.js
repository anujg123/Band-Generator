import express from "express";
import bodyparser from "body-parser";

const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit",(req, res) => {
    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    res.render("index.ejs",{ adjective: randomAdj, noun: randomNoun});


});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

const adj = [
    "abandoned",
    "able",
    "absolute",
    "youthful",
    "yummy",
    "zany",
    "zealous",
    "zesty",
    "zigzag",
    "attractive",
"bald",
"beautiful",
"chubby",
"clean",
"dazzling",
"drab",
"elegant",
"fancy",
"fit",
"flabby",
"glamorous",
"gorgeous",
"handsome",
"long",
"magnificent",
"muscular",
"plain",
"plump",
"quaint",
"scruffy",
"shapely",
"short",
"skinny",
"stocky",
"ugly",
"unkempt",
"unsightly",
   

];

const noun = [
   
"Abroad",
"Abuse",
"Access",
"Accident",
"Account",
"Act",
"Action",
"Active",
"Activity",
"Actor",
"Ad",
"Addition",
"Address",
"Administration",
"Adult",
"Advance",
"Advantage",
"Advertising",
"Advice",
"Affair",
"Affect",
"Afternoon",
"Age",
"Agency",
"Agent",
"Agreement",
"Air",
"Airline",
"Airport",
"Alarm",
"Alcohol",
"Alternative",
"Ambition",
"Amount",
"Analysis",
"Analyst",
"Anger",
"Angle",
"Animal",
"Annual",
"Answer",
"Anxiety",
"Anybody",
"Anything",
"Anywhere",
"Apartment",
"Appeal",
"Appearance",
"Apple",
"Application",
"Appointment",
"Area",
"Argument",
"Arm",
"Army",
"Arrival",
"Art",
"Article",
"Aside",
"Ask",
"Aspect",
"Assignment",
"Assist",
"Assistance",
"Assistant",
"Associate",
"Association",
"Assumption",
"Atmosphere",
"Attack",
"Attempt",
"Attention",
"Attitude",
"Audience",
"Author",
"Average",
"Award",
"Awareness",

];