
function temHabilidade(skills){
    if(skills.indexOf(skills) != -1){
        skills.push(Javascript)
        return false
    } else {
        return true
    }

}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));