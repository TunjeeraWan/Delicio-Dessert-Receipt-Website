const express = require('express');
const dotenv = require("dotenv");
const mysql = require('mysql2');
const path = require('path');
const app = express();
const router = express.Router();
var cors = require('cors');
dotenv.config();
app.use('/', router);
app.use(cors());
port = '3030'

let corsOptions = {
    origin: 'http://localhost:3030',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "delicio"
});

app.get('/product', (req, res) => {
    console.log(req.body)
    
    const filterObj = req.query
    let filter = ""
  
    console.log(filterObj)
  
    if (filterObj.name !== undefined && filterObj.name !== "") {
      filter += ` AND ( firstname LIKE "%${filterObj.name}%" OR lastname LIKE "%${filterObj.name}%" ) `
    }
  
    if (filterObj.type !== undefined && filterObj.type !== "") {
      filter += ` AND age = ${parseInt(filterObj.type)} `
    }
  
    if (filterObj.portion !== undefined && filterObj.portion !== "") {
      filter += ` AND sex = "${filterObj.portion}" `
    }
  
    if (filterObj.totaltime !== undefined && filterObj.totaltime !== "") {
      filter += ` AND nation = "${filterObj.totaltime}" `
    }
  
    const query = `SELECT * FROM admin_info WHERE 1 ${filter}`
  
    // console.log(query)
  
    connection.query(query, (err, result) => {
      res.send(result)
    })
  })

  //insert
// method: post
//http://localhost:3030/product
//test1:
// {
//     "pro": {
//     "product_no": 120,
    //"productname": "Strawberry puff",
    //"productdes": "Diana Henry's springy sponge is better than a Victoria if you’re going to fill and decorate it with berries. You could use another flavour of curd – orange or passion fruit – as long as it goes with strawberries",
    //"preptime": "20 mins",
    //"cooktime": "25 mins",
    //"serving": "6-8 serving",
    //"instruction": "Step 1: Preheat the oven to 180ºC, gas mark 4. Butter 2 x 23cm round cake tins and line the bases with buttered baking parchment. Dust the insides of each tin with caster sugar, then with flour, tipping out the excess, Step 2: Using an electric stand mixer, beat the eggs and sugar until you have a soft, mousse-like mixture. You should be able to see ribbons of batter on the surface of the mixture when you lift the beaters. Add the lemon zest and 75ml hot water, then beat slowly just to combine. Sift together the flour, baking powder and a pinch of salt and, using a large metal spoon, fold this into the batter. Do it gently, so as not to knock out much of the air., Step 3: Divide the batter between the tins and bake for 25 minutes. Don’t open the oven during this time. When ready, the sponges should be golden and risen and coming away from the sides of the tins. Leave them in the tins on a cooling rack for 10 minutes, then turn the cakes out onto the racks. Leave to cool completely, then carefully peel off the paper., Step 4: Beat the crème fraîche with a fork to loosen – it’s quite stiff. Beat the double cream in a large bowl with an electric whisk until it holds its shape, then fold in the crème fraîche, lemon zest and icing sugar., Step 5: Halve or slice the strawberries, depending on their size, and put them in a bowl with the sugar and lemon juice. Leave to macerate for no more than 10 minutes – any longer and the fruit will become too soft., Step 6: Combine the cream mixture and lemon curd. Don’t mix it too much – you want to see the lemon curd marbling the cream. Put the bottom sponge for the cake on a serving plate. Spread with ½ the lemon curd cream mixture and put ½ the berries on top. Place the other sponge on top – the right way up – and top with the rest of the cream. Put the rest of the strawberries on top – don’t worry if there are red juices running out of them. That’s part of the charm of this cake.",
    //"ingredients": "225g caster sugar, plus more for dusting, 150g plain flour, plus more for dusting, 3 British Blacktail Large Free Range Egg, 3 eggs (separated), 1 pinch cream of tartar, 1 unwaxed lemon (finely grated zest), 300g creme fraiche, 300ml double cream, 8 tbsp lemon curd",
    //"tools": "Small Heat-Resistant Bowl (Bowl #1), Small Saucepan That Fits Bowl #1 For The Double Boiler (Pot A), Stand Mixer Bowl Or Large Mixing Bowl (Bowl #2), Large Pot That Fits Bowl #2 For The Bain-Marie (Pot B), Parchment Paper, Cake Pan (8 Inches/20 Cm), Silicone Spatula",
    //"image": "https://drive.google.com/file/d/1nAGOXgVv07_MA6mRrsMMNkdygLlPGMTs/view?usp=share_link"
//     }
//     }
//test2:
// {
//     "pro": {
//     "product_no": 100,
    //"productname": "lemon cheese cake",
    //"productdes": "peter Henry's springy sponge is better than a Victoria if you’re going to fill and decorate it with berries. You could use another flavour of curd – orange or passion fruit – as long as it goes with strawberries",
    //"preptime": "30 mins",
    //"cooktime": "40 mins",
    //"serving": "8 serving",
    //"instruction": "Step 1: Preheat the oven to 180ºC, gas mark 4. Butter 2 x 23cm round cake tins and line the bases with buttered baking parchment. Dust the insides of each tin with caster sugar, then with flour, tipping out the excess, Step 2: Using an electric stand mixer, beat the eggs and sugar until you have a soft, mousse-like mixture. You should be able to see ribbons of batter on the surface of the mixture when you lift the beaters. Add the lemon zest and 75ml hot water, then beat slowly just to combine. Sift together the flour, baking powder and a pinch of salt and, using a large metal spoon, fold this into the batter. Do it gently, so as not to knock out much of the air., Step 3: Divide the batter between the tins and bake for 25 minutes. Don’t open the oven during this time. When ready, the sponges should be golden and risen and coming away from the sides of the tins. Leave them in the tins on a cooling rack for 10 minutes, then turn the cakes out onto the racks. Leave to cool completely, then carefully peel off the paper., Step 4: Beat the crème fraîche with a fork to loosen – it’s quite stiff. Beat the double cream in a large bowl with an electric whisk until it holds its shape, then fold in the crème fraîche, lemon zest and icing sugar., Step 5: Halve or slice the strawberries, depending on their size, and put them in a bowl with the sugar and lemon juice. Leave to macerate for no more than 10 minutes – any longer and the fruit will become too soft., Step 6: Combine the cream mixture and lemon curd. Don’t mix it too much – you want to see the lemon curd marbling the cream. Put the bottom sponge for the cake on a serving plate. Spread with ½ the lemon curd cream mixture and put ½ the berries on top. Place the other sponge on top – the right way up – and top with the rest of the cream. Put the rest of the strawberries on top – don’t worry if there are red juices running out of them. That’s part of the charm of this cake.",
    //"ingredients": "225g caster sugar, plus more for dusting, 150g plain flour, plus more for dusting, 3 British Blacktail Large Free Range Egg, 3 eggs (separated), 1 pinch cream of tartar, 1 unwaxed lemon (finely grated zest), 300g creme fraiche, 300ml double cream, 8 tbsp lemon curd",
    //"tools": "Small Heat-Resistant Bowl (Bowl #1), Small Saucepan That Fits Bowl #1 For The Double Boiler (Pot A), Stand Mixer Bowl Or Large Mixing Bowl (Bowl #2), Large Pot That Fits Bowl #2 For The Bain-Marie (Pot B), Parchment Paper, Cake Pan (8 Inches/20 Cm), Silicone Spatula",
    //"image": "https://drive.google.com/file/d/1nAGOXgVv07_MA6mRrsMMNkdygLlPGMTs/view?usp=share_link"
//     }
//     }


app.post('/product', cors(), function (req, res) {
    let pro = req.body.pro;
    console.log(pro);
    if (!pro) {
        return res.status(400).send({ error: true, message: 'Please provide product information' });
    }
    connection.query('INSERT INTO datadomain set ?',student, function (error, results) {
        if (error) throw error;
    return res.send({error: false, data: results.affectedRows, message: 'New product has been created successfully.'});
    }); 
});


//update
// method: put
//http://localhost:3030/product
//test1:
// {
// "pro": {
// "product_no": 111,
//"productname": "Strawberry and Lemon Cake with yam",
//"productdes": "Diana Henry's springy sponge is better than a Victoria if you’re going to fill and decorate it with berries. You could use another flavour of curd – orange or passion fruit – as long as it goes with strawberries",
//"preptime": "20 mins",
//"cooktime": "25 mins",
//"serving": "6-8 serving",
//"instruction": "Step 1: Preheat the oven to 180ºC, gas mark 4. Butter 2 x 23cm round cake tins and line the bases with buttered baking parchment. Dust the insides of each tin with caster sugar, then with flour, tipping out the excess, Step 2: Using an electric stand mixer, beat the eggs and sugar until you have a soft, mousse-like mixture. You should be able to see ribbons of batter on the surface of the mixture when you lift the beaters. Add the lemon zest and 75ml hot water, then beat slowly just to combine. Sift together the flour, baking powder and a pinch of salt and, using a large metal spoon, fold this into the batter. Do it gently, so as not to knock out much of the air., Step 3: Divide the batter between the tins and bake for 25 minutes. Don’t open the oven during this time. When ready, the sponges should be golden and risen and coming away from the sides of the tins. Leave them in the tins on a cooling rack for 10 minutes, then turn the cakes out onto the racks. Leave to cool completely, then carefully peel off the paper., Step 4: Beat the crème fraîche with a fork to loosen – it’s quite stiff. Beat the double cream in a large bowl with an electric whisk until it holds its shape, then fold in the crème fraîche, lemon zest and icing sugar., Step 5: Halve or slice the strawberries, depending on their size, and put them in a bowl with the sugar and lemon juice. Leave to macerate for no more than 10 minutes – any longer and the fruit will become too soft., Step 6: Combine the cream mixture and lemon curd. Don’t mix it too much – you want to see the lemon curd marbling the cream. Put the bottom sponge for the cake on a serving plate. Spread with ½ the lemon curd cream mixture and put ½ the berries on top. Place the other sponge on top – the right way up – and top with the rest of the cream. Put the rest of the strawberries on top – don’t worry if there are red juices running out of them. That’s part of the charm of this cake.",
//"ingredients": "225g caster sugar, plus more for dusting, 150g plain flour, plus more for dusting, 3 British Blacktail Large Free Range Egg, 3 eggs (separated), 1 pinch cream of tartar, 1 unwaxed lemon (finely grated zest), 300g creme fraiche, 300ml double cream, 8 tbsp lemon curd",
//"tools": "Small Heat-Resistant Bowl (Bowl #1), Small Saucepan That Fits Bowl #1 For The Double Boiler (Pot A), Stand Mixer Bowl Or Large Mixing Bowl (Bowl #2), Large Pot That Fits Bowl #2 For The Bain-Marie (Pot B), Parchment Paper, Cake Pan (8 Inches/20 Cm), Silicone Spatula",
//"image": "https://drive.google.com/file/d/1nAGOXgVv07_MA6mRrsMMNkdygLlPGMTs/view?usp=share_link"
// }
// }
//test2:
// {
//     "pro": {
//     "product_no": 100,
  //"productname": "lemon cheese cake with lemon tea",
  //"productdes": "peter Henry's springy sponge is better than a Victoria if you’re going to fill and decorate it with berries. You could use another flavour of curd – orange or passion fruit – as long as it goes with strawberries",
  //"preptime": "30 mins",
  //"cooktime": "40 mins",
  //"serving": "8 serving",
  //"instruction": "Step 1: Preheat the oven to 180ºC, gas mark 4. Butter 2 x 23cm round cake tins and line the bases with buttered baking parchment. Dust the insides of each tin with caster sugar, then with flour, tipping out the excess, Step 2: Using an electric stand mixer, beat the eggs and sugar until you have a soft, mousse-like mixture. You should be able to see ribbons of batter on the surface of the mixture when you lift the beaters. Add the lemon zest and 75ml hot water, then beat slowly just to combine. Sift together the flour, baking powder and a pinch of salt and, using a large metal spoon, fold this into the batter. Do it gently, so as not to knock out much of the air., Step 3: Divide the batter between the tins and bake for 25 minutes. Don’t open the oven during this time. When ready, the sponges should be golden and risen and coming away from the sides of the tins. Leave them in the tins on a cooling rack for 10 minutes, then turn the cakes out onto the racks. Leave to cool completely, then carefully peel off the paper., Step 4: Beat the crème fraîche with a fork to loosen – it’s quite stiff. Beat the double cream in a large bowl with an electric whisk until it holds its shape, then fold in the crème fraîche, lemon zest and icing sugar., Step 5: Halve or slice the strawberries, depending on their size, and put them in a bowl with the sugar and lemon juice. Leave to macerate for no more than 10 minutes – any longer and the fruit will become too soft., Step 6: Combine the cream mixture and lemon curd. Don’t mix it too much – you want to see the lemon curd marbling the cream. Put the bottom sponge for the cake on a serving plate. Spread with ½ the lemon curd cream mixture and put ½ the berries on top. Place the other sponge on top – the right way up – and top with the rest of the cream. Put the rest of the strawberries on top – don’t worry if there are red juices running out of them. That’s part of the charm of this cake.",
  //"ingredients": "225g caster sugar, plus more for dusting, 150g plain flour, plus more for dusting, 3 British Blacktail Large Free Range Egg, 3 eggs (separated), 1 pinch cream of tartar, 1 unwaxed lemon (finely grated zest), 300g creme fraiche, 300ml double cream, 8 tbsp lemon curd",
  //"tools": "Small Heat-Resistant Bowl (Bowl #1), Small Saucepan That Fits Bowl #1 For The Double Boiler (Pot A), Stand Mixer Bowl Or Large Mixing Bowl (Bowl #2), Large Pot That Fits Bowl #2 For The Bain-Marie (Pot B), Parchment Paper, Cake Pan (8 Inches/20 Cm), Silicone Spatula",
  //"image": "https://drive.google.com/file/d/1nAGOXgVv07_MA6mRrsMMNkdygLlPGMTs/view?usp=share_link"
//     }
//     }
app.put('/product', cors(), function (req, res) {
    let proID = req.body.pro.product_no;
    let pro = req.body.pro;
    if (!proID || !pro) {
        return res.status(400).send({ error: pro, message: 'Please provide product information' });
        }
    connection.query('UPDATE datadomain set ? WHERE product_no = ?',[pro,proID], function (error, results) {
        if (error) throw error;
    return res.send({error: false, data: results.affectedRows, message: 'New product has been updated successfully.'});
    }); 
});



//delete
// method: delete
//http://localhost:3000//api/product
//test1:
// {
//     "product_no": 120
// }
//test2:
// {
//     "product_no": 100
// }

app.delete('/product', cors(), function (req, res) {
    let proID = req.body.product_no;
    if (!proID) {
        return res.status(400).send({ error: pro, message: 'Please provide product information' });
        }
    connection.query('DELETE FROM datadomain WHERE product_no = ?',[proID], function (error, results) {
        if (error) throw error;
    return res.send({error: false, data: results.affectedRows, message: 'New product has been deleted successfully.'});
    }); 
});      


app.get('/product', function (req, res) {
    connection.query('SELECT * FROM datadomain', function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'product list.' });
    });
});

app.get('/product/:pro', cors(), function (req, res) {
    let pro = req.params.pro;
    console.log(req.params.pro);
    let sql;
    if (!isNaN(req.params.pro)) {
        sql = `SELECT * FROM datadomain WHERE product_no LIKE "%${pro}%"`;
    }  else {
        sql = `SELECT * FROM datadomain WHERE productname LIKE "%${pro}%"`;
    }
    connection.query(sql, function (error, results) {
        res.json(results);
    });
})

app.get('/product/:id/:pro', cors(), function (req, res) {
    let id = req.params.id;
    let pro = req.params.pro;
    console.log(req.params.pro);
    console.log(req.params.id);
    let sql;
    if (!isNaN(req.params.id)) {
        sql = `SELECT * FROM datadomain WHERE product_no  = ${id}`;
    } if (!isNaN(req.params.pro)){
    sql = `SELECT * FROM datadomain WHERE productname  = ${pro}`;
}
    connection.query(sql, function (error, results) {
        res.json(results);
    });
})



app.listen(port, function () {
    console.log('Started!')
});
