
typeCount = 18;
typeNameJPN = ["無", "炎", "水", "草", "電", "氷", "闘", "毒", "地",
    "飛", "超", "虫", "岩", "霊", "竜", "悪", "鋼", "妖"];

typeNameENG = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground",
    "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

// タイプ相性(数値は倍率)
typeDef = [
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 無
    [1, 1.5, 2, 1.5, 1, 1.5, 1, 1, 2, 1, 1, 1.5, 2, 1, 1, 1, 1.5, 1.5], // 炎
    [1, 1.5, 1.5, 2, 2, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5, 1], // 水
    [1, 2, 1.5, 1.5, 1.5, 2, 1, 2, 1.5, 2, 1, 2, 1, 1, 1, 1, 1, 1], // 草
    [1, 1, 1, 1, 1.5, 1, 1, 1, 2, 1.5, 1, 1, 1, 1, 1, 1, 1.5, 1], // 電
    [1, 2, 1, 1, 1, 1.5, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1], // 水
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1.5, 1.5, 1, 1, 1.5, 1, 2], // 闘
    [1, 1, 1, 1.5, 1, 1, 1.5, 1.5, 2, 1, 2, 1.5, 1, 1, 1, 1, 1, 1.5], // 毒
    [1, 1, 2, 2, 0, 2, 1, 1.5, 1, 1, 1, 1, 1.5, 1, 1, 1, 1, 1], // 地
    [1, 1, 1, 1.5, 2, 2, 1.5, 1, 0, 1, 1, 1.5, 2, 1, 1, 1, 1, 1], // 飛
    [1, 1, 1, 1, 1, 1, 1.5, 1, 1, 1, 1.5, 2, 1, 2, 1, 2, 1, 1], // 超
    [1, 2, 1, 1.5, 1, 1, 1.5, 1, 1.5, 2, 1, 1, 2, 1, 1, 1, 1, 1.5], // 虫
    [1.5, 1.5, 2, 2, 1, 1, 2, 1.5, 2, 1.5, 1, 1, 1, 1, 1, 1, 2, 1], // 岩
    [0, 1, 1, 1, 1, 1, 0, 1.5, 1, 1, 1, 1.5, 1, 2, 1, 2, 1, 1], // 霊
    [1, 1.5, 1.5, 1.5, 1.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2], // 竜
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 1.5, 1, 1.5, 1, 2], // 悪
    [1.5, 2, 1, 1.5, 1, 1.5, 2, 0, 2, 1.5, 1.5, 1.5, 1.5, 1, 1.5, 1, 1.5, 2], // 銅
    [1, 1, 1, 1, 1, 1, 1.5, 2, 1, 1, 1, 1.5, 1, 1, 0, 1.5, 2, 1], // 妖
];

function checkSingleTypeComp(atkTypeId, defTypeId) {
damageMag = typeDef[defTypeId][atkTypeId];
return damagaMag;
}

function checkMultiTypeComp(atkTypeId, defTypeId1, defTypeId2) {
    damageMag1 = typeDef[defTypeId1][atkTypeId];
    damagaMag2 = typeDef[defTypeId2][atkTypeId];
    return damagaMag1 * damageMag2;
}

function chooseRandomType() {
    max = typeCount - 1;
    chooseTypeId = Math.floor(Math.random() * max);
    return chooseTypeId;
}


function changeTypeImageEvent() {
    let atkTypeElement = document.getElementById("atk");
    let defTypeElement = document.getElementById("def");
    
    defTypeElement.src = "img/type/" + typeNameENG[chooseRandomType()] + ".svg";
    atkTypeElement.src = "img/type/" + typeNameENG[chooseRandomType()] + ".svg";
}

function sendAnswerEvent() {
    //TODO
}