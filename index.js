import * as type from "./js/type.js";

function changeTypeImage(atkTypeId, defTypeId) {
    let atkTypeElement = document.getElementById("atk-image");
    let defTypeElement = document.getElementById("def-image");

    // 画像とデータを変更
    defTypeElement.src = "img/type/" + type.typeNameENG[defTypeId] + ".svg";
    defTypeElement.dataset.typeid = defTypeId;
    atkTypeElement.src = "img/type/" + type.typeNameENG[atkTypeId] + ".svg";
    atkTypeElement.dataset.typeid = atkTypeId;
}


// 回答ボタン
document.getElementById('answer-button').onclick = () => {
    let atkTypeId = document.getElementById("atk-image").dataset.typeid;
    let defTypeId = document.getElementById("def-image").dataset.typeid;
    console.log(atkTypeId, defTypeId);
    let userAns = document.getElementById('input-textarea').value;
    let correctAns = String(type.checkSingleTypeComp(atkTypeId, defTypeId));
    
    const resultElement = document.getElementById('result-div');
    if(userAns == correctAns) {
        resultElement.innerHTML = "<form color=red>正解！</form>";
    } else {
        resultElement.innerHTML = "<form color=blue>不正解</form>";
    }

    resultElement.innerHTML += `答え...${correctAns}倍`;
}

// 更新ボタン
document.getElementById("reload-button").onclick = () => {
    let defTypeId = type.chooseRandomTypeId();
    let atkTypeId = type.chooseRandomTypeId();
    changeTypeImage(atkTypeId, defTypeId);
}