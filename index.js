var express = require('express')
var bodyparser =require('body-parser')
var https = require('https'); 
var app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const ports = process.env.PORT || 3000;

console.log("hello");


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
app.post('/ipaddress',function (req,res)
{
debugger
  var ip= req.body.IpAddress;
 

  
let url =`https://api.ip2location.com/v2/?key=demo&ip=${ip}&package=WS25&format=json&addon=continent,country,region`
https.get(url, function(resp){
    var body = ''
    resp.on('data', function(data){
        body += data;
    });

    resp.on('end', function(){
        var loc = JSON.parse(body);
        console.log(loc);

       var address=loc;
       console.log("its start from here")
       res.status(200).json({address});
       
    })
});
 
})

// app.post('/ipaddressapi',function (req,res)
// {
//   debugger
//   var ipaddress= req.body.Ipaddress;
  
  
// } )

app.listen(ports, () => console.log(`Listening on port ${ports}`));