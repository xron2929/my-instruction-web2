


function eraseUsername() {
    let search=document.getElementById('username');
    
    if(search.class!="") {
        search.value="";
    }
    search.class="";


    return;
}

function eraseTitle(num) {
    let search=document.getElementById('title');


alert("?");

    if(search.class!="") {
        search.value="";
    }
    search.class="";
    return;
}

function erasePassword(num,) {
    let search=document.getElementById('password');



}
function addFunc() {
    let mainText=document.getElementById("mainText");
    alert(mainText.innerHTML);
}


function bold() {
    let editor = document.getElementById('mainText');
    document.execCommand('bold');
    mainText.focus({preventScroll: true});
    alert("#mainText");
}

$(function(){
    $("#submit").click(function(){
        submit();
    })
})
// 일단 위에 ajax랑 아래 submit 있는데 아래 2개 돌아가는지 테스트 해야됨
// jquery는 나중에 바꾸면 될듯

function sendRegData() {
    $.ajax({
        type:"POST",
        url: "/board/reg",
        data: {content:$("#mainText").html(),title:$(".reg-title").text()},
        dataType:"json",
        async:"true",
        success:function() {
            console.log("success");
        }
    })
}

//script sour
function submit(){
	let myform = document.getElementById('#mainText').html();
	formData = new FormData(myform);
	fetch('http://localhost:8001/test',{
		method:'POST',
		body : myform
	});
}
