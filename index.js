const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
var $;

app = express();
var router = express.Router();

const port = 9050;

app.listen(port);
app.use('/api', router);


router.get('/health', function(req,res){
    console.log(req);
    res.json({'status':'online'});
});


router.get('/green', function(req,res){
    console.log(' looking up greenline')
    let url = 'http://realtime.ridemcts.com/bustime/wireless/html/eta.jsp?route=GRE&direction=SOUTH&id=1333&showAllBusses=on';
    request(url, function(err,response,html){
        if(err){
            res.send(500);
        }
    $ = cheerio.load(html);
    var etas = [];
    for(var i=1; i<6; i+=2){
    etas.push($('b')[i].children[0].data);
    }
    etas = etas.map(eta => eta.replace('MIN','minutes'));
    console.log(etas.toString());
    res.send('The next Green line bus headed south will arrive in '+ etas[0].toString() + ' then followed by ' + etas[1].toString() +' and finally ' + etas[2].toString());
});
});

router.get('/gold', function(req,res){
    console.log(' looking up greenline');
    let url = 'http://realtime.ridemcts.com/bustime/wireless/html/eta.jsp?route=GOL&direction=WEST&id=1333&showAllBusses=on';
    request(url, function(err,response,html){
        if(err){
            res.send(500);
        }
    $ = cheerio.load(html);
    var etas = [];
    for(var i=1; i<6; i+=2){
    etas.push($('b')[i].children[0].data);
    }
    etas = etas.map(eta => eta.replace('MIN','minutes'));
    console.log(etas.toString());
    res.send('The next Gold line bus headed south will arrive in '+ etas[0].toString() + ' then followed by ' + etas[1].toString() +' and finally ' + etas[2].toString());
});    


});



