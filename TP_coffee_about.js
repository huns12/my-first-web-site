
//js헤더파일 불러올 때,
//checked box에서 한번 초기화 시켜주기 위해서.

let tab01  = document.getElementById('tab01');

tab01_checked = tab01.getAttribute("checked");

console.log(tab01_checked);

if(tab01_checked == ''){

    // document.getElementsByClassName("tabcon con1")
    // getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    let tabContentsCon = document.getElementsByClassName("tabcon con1");
    tabContentsCon[0].style.display = 'block';

    let mainBackgroundImage = document.getElementsByClassName('middle_about_wrap');
    mainBackgroundImage[0].style.backgroundImage = "url(beans.jpg)"

    console.log(`${tabContentsCon[0].style.display}`);

}


// 콘텐츠 보이게 하는 함수 구현 input마다 onclick으로 한번에 구현


function tabVisible(){

    let tabIdArr = [];

    tabIdArr.push(document.getElementById(`tab01`));
    tabIdArr.push(document.getElementById(`tab02`));
    tabIdArr.push(document.getElementById(`tab03`));

    console.log(tabIdArr);

    let tabCheckedArr = [];

    tabCheckedArr[0] = tabIdArr[0].checked;
    tabCheckedArr[1] = tabIdArr[1].checked;
    tabCheckedArr[2] = tabIdArr[2].checked;

    console.log(tabCheckedArr);

    let tabContentsArr = [];

    tabContentsArr.push(document.getElementsByClassName(`tabcon con1`));
    tabContentsArr.push(document.getElementsByClassName(`tabcon con2`));
    tabContentsArr.push(document.getElementsByClassName(`tabcon con3`));

    console.log(tabContentsArr);

    for (let tabNum = 0; tabNum < 3 ; tabNum++){

        let tabContentsCon = document.getElementsByClassName(`tabcon con${tabNum+1}`);

        if(tabCheckedArr[tabNum] == true){
            tabContentsCon[0].style.display = 'block';
        }else{
            tabContentsCon[0].style.display = 'none';
        }


    }
    

    //backGround Image
    if(tabCheckedArr[0] == true){//beans

        let mainBackgroundImage = document.getElementsByClassName('middle_about_wrap');
        mainBackgroundImage[0].style.backgroundImage = "url(beans.jpg)"
    }
    if(tabCheckedArr[1] == true){//ice

        let mainBackgroundImage = document.getElementsByClassName('middle_about_wrap');
        mainBackgroundImage[0].style.backgroundImage = "url(ice.jpg)"

    }
    if(tabCheckedArr[2] == true){//espresso extraction

        let mainBackgroundImage = document.getElementsByClassName('middle_about_wrap');
        mainBackgroundImage[0].style.backgroundImage = "url(espresso_extraction.jpg)"

    }

}

function random(n) {
    return (Math.floor(Math.random()*n)+1);
}
