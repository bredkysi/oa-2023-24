import express from "express"
import cors from "cors"
import https from "https"

const app = express()

// app.use(cors({
//     origin: "http://localhost:5500"
// }))

app.use(express.static('../frontend'))

app.get("/api", (req, res) => {
    https.get({
        hostname: "api-football-v1.p.rapidapi.com",
        path: "/v3/players/topscorers?season=2023&league=61",
        headers:{
            "X-Rapidapi-Key": "bb14b3d23amshc052e9d5c7b15a0p1a050cjsn1fa83dbcc980",
            "X-Rapidapi-Host": "api-football-v1.p.rapidapi.com"
        }
    },
    result =>{
        let data = "";
        result.on("data", chunk => {
            data += chunk;
        })
        result.on( "end", () => {
            let parsedData = JSON.parse(data);
            let x = [];
            let y = [];
            parsedData.response.forEach( item => {
                x.push(item["player"]["name"]);
                y.push(item["statistics"][0]["goals"]["total"]);
            })
            res.send({
                x:x,
                y:y,
                type:"scatter"
            });
        })
    }
)
    // res.send({
    //     x: [1, 2, 3],
    //     y: [4, 5, 6]
    // }).status(200)
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server listening on port ${port} 🚀`))
