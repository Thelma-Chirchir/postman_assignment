//file system module
const fs = require("fs");
// fs.readFile('readm.txt',function(err,data){
// console.log(data)
// })
function adduser() {
  const dataStruc = {
    username: null,
    age: null,
  };
  const data = fs.readFileSync("datasource.json", "utf-8");
  let newData = JSON.parse(data);
  console.log(newData);
  let prop = Object.create(dataStruc);
  prop.username = "Evangeline";
  prop.age = 20;
  newData.push(prop);
  // write
  fs.writeFileSync("datasource.json", JSON.stringify(newData));
}
module.exports = adduser;
