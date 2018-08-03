// Upgrade for JSON.stringify, updated to allow arrays
// copy from https://stackoverflow.com/questions/16196338/json-stringify-doesnt-work-with-normal-javascript-array
(function(){
    // Convert array to object
    var convArrToObj = function(array){
        var thisEleObj = new Object();
        if(typeof array == "object"){
            for(var i in array){
                var thisEle = convArrToObj(array[i]);
                thisEleObj[i] = thisEle;
            }
        }else {
            thisEleObj = array;
        }
        return thisEleObj;
    };
    var oldJSONStringify = JSON.stringify;
    JSON.stringify = function(input){
        if(oldJSONStringify(input) == '[]')
            return oldJSONStringify(convArrToObj(input));
        else
            return oldJSONStringify(input);
    };
})();

const d1 = require('./1.1.js')
const d2 = require('./1.2.js')
const d3 = require('./1.3.js')
const d4 = require('./1.4.js')
const d5 = require('./5.js')
const d6 = require('./6.js')
const d7 = require('./7.js')
const d8 = require('./8.js')
const d9 = require('./9.js')
const d10 = require('./10.js')

var fs = require('fs');
var shell = require('shelljs');

var folder = './tmpjson/'
shell.mkdir('-p', folder);

function writeToFile(filename, data){
    fs.writeFile(filename, JSON.stringify(data.downloads), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

writeToFile(folder + '1.1.json', d1)
writeToFile(folder + '1.2.json', d2)
writeToFile(folder + '1.3.json', d3)
writeToFile(folder + '1.4.json', d4)
writeToFile(folder + '5.json', d5)
writeToFile(folder + '6.json', d6)
writeToFile(folder + '7.json', d7)
writeToFile(folder + '8.json', d8)
writeToFile(folder + '9.json', d9)
writeToFile(folder + '10.json', d10)
