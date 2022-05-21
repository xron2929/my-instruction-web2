function pageLoad(tableSize,nowPage,pageSize){
    
    // db 데이터 꺼내오고. 몇 페이지 구현할지 정함
    //(몇 페이지 구현할 지 정하는 건) pageSize가 결정
    // if(db.size()%10!=0) db.size/10+1;
    // if(db.size()%10==0) db,size/10
    if(tableSize<10) {
        var container2TopCm=13.2;
        for(var i=tableSize;i<10;i++) {
            var container2=document.getElementsByClassName("container2")[0];
            container2.style.position="absolute";
            container2TopCm=container2TopCm-1;
        }
        container2.style.top=container2TopCm.toString()+"cm";
        /*
            테이블이 10개에서 하나씩 줄을 때 마다 테이블 하나의 높이가 1cm니까 1cm 씩 감소
        */
    }


    if(nowPage<=9) {
        var findFinalPage=min(pageSize,10);
        for(var i=0;i<findFinalPage;i++) {
            var container2=document.getElementsByClassName("container2")[0];
            var container3=document.getElementById("container");
            var p=document.createElement('div');
            p.textContent=(i+1).toString();
            p.id="page"+(i+1).toString();
            p.classList="page";
            container2.appendChild(p);
        }
        
    }
    /*
        현재 페이지가 9페이지보다 작거나 같으면 아래 로직으로 하면 0부터 계산해야되서 로직이 복잡해져서
        간단하게 분리하는 게 보기 편할 것 같아서 바꿈
        [0] 이렇게 한 이유가 dom 객체 쓰려고 하는 건데, appendChild로 자동으로 뒤에 추가 시켜주려면 해야됨
        id는 잘 되는 걸 보니까 아마 해당 태그가 하나여야만 작동하는듯 그래서 내부적으로 하려면 
        화살표 함수나 for auto 적용시켜서 하면 될듯 위의 경우에는 fori처럼 i값이 필요한 경우가 아니라서
        아래의 경우는 10페이지면 19-9인 10부터 10*2=20 전까지 탐색
        
    */
    else {
        var firstPage=nowPage-(nowPage%10);
        var temporaryFinalPage=min(firstPage+10,pageSize);
        var i=nowPage-(nowPage%10)

        while(i<temporaryFinalPage) {
            var container2=document.getElementsByClassName("container2")[0];
            var p=document.createElement('div');
            p.textContent=(i).toString();
            p.id="page"+((i%10)+1).toString();
            p.classList="page";
            container2.appendChild(p);
            i++;
        }
    }
    /*
        for문보다 while문으로 하는게 보기 편할 것 같아서 수정함
    */

}
function min(x,y) {
    if(x<y) return x;
    else return y;
}

function eraseAdvertisement() {

    var exit=document.getElementById("exit");
    var advertisement=document.getElementById("advertisement");
    exit.remove();
    advertisement.remove();
    var table=document.getElementsByTagName("table")[0];
    table.style.width="32.8cm";
    var container2=document.getElementsByClassName("container2")[0];
    container2.style.paddingRight="32.8cm";
    var loginBox=document.getElementById("loginBox");
    var footer=document.getElementsByTagName("footer")[0];
    var textarea=document.getElementById("textarea");
    var searchButton=document.getElementById("searchButton");
    var writeButton=document.getElementById("writeButton");
    var marginBox=document.getElementsByClassName("marginBox")[0];

    footer.style.left="0cm";
    footer.style.width="38.1cm";
    textarea.style.width="27cm";
    searchButton.style.left="27.9cm";
    writeButton.style.left="30.78cm";
    marginBox.style.left="33cm";

    if (matchMedia("screen and (max-width: 352px)").matches) {
        for (item of document.getElementsByClassName("container")) {
            item.style.marginRight="1.5cm";
    
            if(item.classList=="container box") {
                item.style.width="4.86cm";
            }
        }
        searchButton.style.top="0px";
        marginBox.style.left="29.6cm";

    }
    else {
        loginBox.style.left="1cm";
        for (item of document.getElementsByClassName("container")) {
            item.style.marginRight="2cm";
    
            if(item.classList=="container box") {
                item.style.width="5cm";
            }
        }
    
    // searchButton은 캐시에 있는 값이 정적으로 그대로 남아있어서 동적으로 다시 작동시켜 relative 자동으로 띄어지게 함



    }

    // relative 때문에 한 줄 띄어지는 문제로 absolute로 직접 좌표를 입력해서 설정함


    return;
}

function search() {
    var search=document.getElementById('textarea');
    search.value="";
    return;
}





    
