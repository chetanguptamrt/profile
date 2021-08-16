$(document).ready(function(){
    var index = 0;
    var position = 0;
    var data = ["Student", "Programmer", "Full Stack Developer"];
    var top = true;
    setInterval(function(){
        if(index==3){
            index=0;
        }
        $("#homeTitle").html(data[index].substring(0, position));
        if(top){
            position++;
        } else{
            position--;
        }
        if(data[index].length==(position-1)){
            top=false;
        } else if(position==0){
            top=true;
            index++;
        }
    }, 250);
});

function projectJ(){
    $("#projectPython").hide();
    $("#projectHtml").hide();
    $("#projectCpp").hide();
    $("#projectJava").show();
    $("#projectPp").removeClass("text-light");
    $("#projectPp").removeClass("bg-dark");
    $("#projectHp").removeClass("text-light");
    $("#projectHp").removeClass("bg-dark");
    $("#projectCp").removeClass("text-light");
    $("#projectCp").removeClass("bg-dark");
    $("#projectJp").addClass("text-light");
    $("#projectJp").addClass("bg-dark");
}
function projectP(){
    $("#projectJava").hide();
    $("#projectHtml").hide();
    $("#projectCpp").hide();
    $("#projectPython").show();
    $("#projectJp").removeClass("text-light");
    $("#projectJp").removeClass("bg-dark");
    $("#projectHp").removeClass("text-light");
    $("#projectHp").removeClass("bg-dark");
    $("#projectCp").removeClass("text-light");
    $("#projectCp").removeClass("bg-dark");
    $("#projectPp").addClass("text-light");
    $("#projectPp").addClass("bg-dark");
}
function projectH(){
    $("#projectPython").hide();
    $("#projectJava").hide();
    $("#projectCpp").hide();
    $("#projectHtml").show();
    $("#projectJp").removeClass("text-light");
    $("#projectJp").removeClass("bg-dark");
    $("#projectPp").removeClass("text-light");
    $("#projectPp").removeClass("bg-dark");
    $("#projectCp").removeClass("text-light");
    $("#projectCp").removeClass("bg-dark");
    $("#projectHp").addClass("text-light");
    $("#projectHp").addClass("bg-dark");
}
function projectC(){
    $("#projectPython").hide();
    $("#projectJava").hide();
    $("#projectHtml").hide();
    $("#projectCpp").show();
    $("#projectJp").removeClass("text-light");
    $("#projectJp").removeClass("bg-dark");
    $("#projectPp").removeClass("text-light");
    $("#projectPp").removeClass("bg-dark");
    $("#projectHp").removeClass("text-light");
    $("#projectHp").removeClass("bg-dark");
    $("#projectCp").addClass("text-light");
    $("#projectCp").addClass("bg-dark");
}
