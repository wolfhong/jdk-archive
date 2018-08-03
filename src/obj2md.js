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
var arrayToTable = require('array-to-table')

function writeToMd(filename, data){
    var downloads = data.downloads
    var ret_str = ""
    for (key in downloads) {
        ret_str += "## " + downloads[key]['title'] + "\n\n"

        var old_list = downloads[key]['files']
        var new_list = [];
        for (fobj in old_list) {
            var filepath = old_list[fobj]['filepath']
            var package_name = filepath.slice(filepath.lastIndexOf("/") + 1)
            new_list.push({
                "File Description": old_list[fobj]['title'],
                "File Size": old_list[fobj]['size'],
                "Download": "[" + package_name + "](" + old_list[fobj]['filepath'] +  ")" 
            })
        }

        ret_str += arrayToTable(new_list).replace(/\r\n/g, '\n')
        ret_str += "\n\n"
    }
    fs.writeFile(filename, ret_str, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

writeToMd('../markdown/1.1.md', d1)
writeToMd('../markdown/1.2.md', d2)
writeToMd('../markdown/1.3.md', d3)
writeToMd('../markdown/1.4.md', d4)
writeToMd('../markdown/5.md', d5)
writeToMd('../markdown/6.md', d6)
writeToMd('../markdown/7.md', d7)
writeToMd('../markdown/8.md', d8)
writeToMd('../markdown/9.md', d9)
writeToMd('../markdown/10.md', d10)
