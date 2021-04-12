var TMI = [
       "아이폰을 제외하고 아이패드, 에어팟, 맥북 다 가지고 있는 혼종(?) 유저입니다. (폰은 갤럭시...🌟)",
       " 해장을 할 때는 쌀국수로 해장을 합니다. (쌀국수 먹으러가자하면 좋다고 따라갈 거에요!)",
       "같은 값이면 소주 2병 보다는 칵테일 한 잔을 더 선호하는 감성 넘치는 사람입니다.",
       " 헬스장 운동보다는 공원의 철봉을 더 좋아합니다. (특히 딥스 좋아합니다 .... )",
       "제일 좋아하는 캐릭터는 미니언즈의 밥입니다 (에어 팟 케이스도 밥! 킹밥!!!!!!)"];
var random= Math.floor(Math.random() * TMI.length);
var result = TMI[random];
const randmomBTN =document.getElementsByClassName("randomBTN");
const textSpace = document.getElementsByClassName("textSpace");  
var num1 = textSpace[0].innerHTML;




function TMIPopup (){

    var addSpan = document.createElement('span');
    var addText = document.createTextNode(result);
    addSpan.appendChild(addText);
    document.body.appendChild(addSpan);

}


