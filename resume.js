var skills=["running", "jumping", "ninja","soccer","eating","pizza"];
var cool=[true,false,true,true,false,false];
var name="brandon bailey";
var bigName= name.toUpperCase();

function displayPosition(head,info){
    console.log(head +":"+" "+info);

}

function displaySkill(stuff,cool){
    if(cool===true){
        console.log("*BAM:"+" "+stuff)
    }else{
        console.log("* "+stuff)
    }

}
displayPosition("name",bigName);
displayPosition("Career","CEO OMB LLC");
displayPosition("description","I own a company that makes and distributes energy pills");
console.log(" ");
console.log(" ");
displayPosition("My interests", " ");
for(i=0;i<skills.length;i++){
    displaySkill(skills[i],cool[i]);
}