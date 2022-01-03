 // 배경변경
 function bodyBgColor(color){
    let eleBody = document.body;
    eleBody.style.backgroundColor = color; 
}

// 링크변경
function aTagColor(color){
    let aTag = document.getElementsByTagName('a');
    for(let idx=0;idx<aTag.length;idx++){
        aTag[idx].style.color = color;
    }
}

// 버튼변경
function buttonColor(border,bgColor,color){
    let btnTag = document.getElementsByTagName('button');
    for(let idx=0;idx<btnTag.length;idx++){
        btnTag[idx].style.border = border;
        btnTag[idx].style.backgroundColor = bgColor;
        btnTag[idx].style.color = color;
    }
}

// 서브타이틀 변경        
function h2Color(color){
    let h2Tag = document.querySelector('h2');
    h2Tag.style.color = color;
}

// 본문 변경
function pTagColor(color){
    let pTag = document.getElementsByTagName('p');
    for(let idx=0;idx<pTag.length;idx++){
        pTag[idx].style.color = color;
    }
}