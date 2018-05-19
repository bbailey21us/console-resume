var skills=["running", "jumping", "ninja","soccer","eating","pizza"];
var cool=[true,false,true,true,false,false];
var name="brandon bailey";
var bigName= name.toUpperCase();

function displayPosition(head,info){
    console.log(head +":"+" "+info);

}

function displaySkill(stuff,cool){
    if(cool===true){
        console.log("* BAM:"+" "+stuff)
    }else{
        console.log("* "+stuff)
    }

}
displayPosition("name",bigName);
displayPosition("Career","CEO OMB LLC");
displayPosition("description","I own a company that makes and distributes energy pills");
console.log(" ");
console.log(" ");
displayPosition("My interests", "");
displaySkill("college baskteball");
displaySkill("butler bulldogs");
displaySkill("eating right");
displaySkill("learning new things")
console.log("")
console.log("")
displayPosition("My Previous Experience","")
displaySkill("Ran a company that made and distributed energy pills")
displaySkill("traded options for myself and family")
displaySkill("Own 7 rental properties in Anderson,IN")
console.log("");
console.log("");
displayPosition("My skills","");
for(i=0;i<skills.length;i++){
    displaySkill(skills[i],cool[i]);
}