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



    var appid = request.body.appid;
    var password = request.body.password;
    var vacancy = request.body.vacancy;
    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
            const mydoc1 = await col.findOne({ "application_id": appid });
            if (mydoc1.application_id == appid && mydoc1.password == password) {
                await col.findOneAndUpdate({ "application_id": appid }, { $set: { "vacancy": vacancy } });
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


app.post("/Pregister", function (request, response){
    var username = request.body.usernameregister;
    var password = request.body.passwordregister;
    var password1 = request.body.password1register;
    var application_id = request.body.r_appid;
    var vacancy = request.body.r_vacancy;
    var contact = request.body.number;
    
    

    async function run() {
        try {
             await client.connect();
             console.log("Connected correctly to server");
             const db = client.db(dbName);
             const col = db.collection("hospital_info");                                                                                                                                                              
             let personDocument = {
                 "name":username,
                 "application_id":application_id,
                 "vacancy":vacancy,
                 "contact":contact,
                 "password":password
             }
             if(password===password1){
                console.log("inserted")
                console.log(username)
                await col.insertOne(personDocument);
                
             }
             else{
                console.log("invalidddd");
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