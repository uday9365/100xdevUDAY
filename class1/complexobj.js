let persons = [{
  first_name : "alex",
  sex : "male",
  metadata : {
    age : 26,
    height : 5.5,
    color : "white"
  }
},{
  first_name : "john",
  sex : "male",
  metadata : {
    age : 18,
    height : 5.9,
    color : "white"
  }
},{
  first_name : "emily",
  sex : "female",
  metadata : {
    age : 25,
    height : 5.5,
    color : "white"
  }
},{
  first_name : "messi",
  sex : "male",
  metadata : {
    age : 10,
    height : 5.5,
    color : "white"
  }
}];

for(let i = 0; i < persons.length; i++){
  if(persons[i]["sex"] == "male" && persons[i]["metadata"]["age"] > 20){
    console.log(persons[i]["first_name"])
  }
}