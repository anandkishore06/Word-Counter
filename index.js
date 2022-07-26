let textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
    // Character count
    var text=this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;

    // Words count
    text=text.trim();
    let words=text.split(" ");
    let newList=words.filter(function(ele){
        return ele!="";
    })
    document.getElementById("word").innerHTML=newList.length;
});