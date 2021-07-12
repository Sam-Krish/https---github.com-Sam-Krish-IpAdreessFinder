
// var ip2loc = require("ip2location-nodejs");
 
// ip2loc.IP2Location_init("C:/Users/Veemak/Downloads/sample.bin.db9/IP-COUNTRY-REGION-CITY-LATITUDE-LONGITUDE-ZIPCODE-SAMPLE.BIN");
 
// testip = ['103.77.37.155'];
// for (var x = 0; x < testip.length; x++) {
//     result = ip2loc.IP2Location_get_all(testip[x]);
//     for (var key in result) {
//         console.log(key + ": " + result[key]);
//     }
// }
 
// ip2loc.IP2Location_close();
var https = require('https');

let url =`https://api.ip2location.com/v2/?key=demo&ip=${2323232}&package=WS25&format=json&addon=continent,country,region,city,geotargeting,country_groupings,time_zone_info&lang=en`
https.get(url, function(resp){
    var body = ''
    resp.on('data', function(data){
        body += data;
    });

    resp.on('end', function(){
        var loc = JSON.parse(body);
        console.log(loc);
    });
});