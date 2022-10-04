var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://yashdarshankar:Yash%401001@cluster0.gto09ok.mongodb.net/mernstack?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "mernstack";
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

app.post("/login",async(req, res) => {
    try {
        console.log(req.body.username);
        res.redirect("/");
    } catch (error) {
        res.status(400).send(error);
        
    }

    
});

app.get("/api", function (request, response) {
    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
            const myDoc = await col.find({}).toArray();

            response.json(myDoc);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);

}); 


app.post("/getemail", function (request, response) {



    var username = request.body.username;
    var password = request.body.password;
    var vacancy = request.body.vacancy;
    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
            const mydoc1 = await col.findOne({ "name": username });
            if (mydoc1.name == username && mydoc1.password == password) {
                await col.findOneAndUpdate({ "name": username }, { $set: { "vacancy": vacancy } });
            }
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});

if(process.env.NODE_ENV = "production"){
    app.use(express.static("client/build"))
}
const port = 5000
app.listen(process.env.PORT || port)
console.log("Something awesome to happen at http://localhost:" + port);