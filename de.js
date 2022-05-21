function removeAside() {


    var exit=document.getElementById("exit");
    exit.remove();
    var marginBox3=document.getElementById("marginBox3");
    marginBox3.remove();
    var aside=document.getElementsByTagName("aside")[0];
    aside.remove();
    var marginBox2=document.getElementById("marginBox2");
    marginBox2.style.width="34.7cm";
    marginBox2.style.backgroundColor="white";
    var marginBox4=document.getElementById("marginBox4");
    marginBox4.style.width="34.7cm";
    var footer=document.getElementsByTagName("footer")[0];
    footer.style.left="50%";
    footer.style.transform="translate(-50%)";
    var bodyHeader=document.getElementById("bodyHeader");
    // bodyHeader.style.left="50%";
    // bodyHeader.style.transform="translate(-50%)";
    bodyHeader.remove();
    // header가 예쁘게 안나와서 그냥 지움
    if (matchMedia("screen and (max-width: 351px)").matches) {
        marginBox2.style.width="30cm";
        marginBox2.style.left="1.45cm";
        marginBox4.style.width="30cm";
        marginBox4.style.left= "1.45cm";
        var linkContainer=document.getElementsByClassName("linkContainer")[0];
        linkContainer.style.left="1.5cm";
        var container1=document.getElementsByClassName("container1")[0];
        container1.style.left="24cm";
        container1.style.width="12cm";
  
        for (item of document.getElementsByClassName("container")) {
            item.style.marginRight="0.7cm";
            if(item.id!="home"&&item.classList!="container box") {
                item.style.marginRight="0.2cm";
            }

        }
        footer.style.transform="";
        footer.style.left="0%";
    }
    return;

}
