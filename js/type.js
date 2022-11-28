export const typeCount = 18;
export const typeNameJPN = ["無", "炎", "水", "草", "電", "氷", "闘", "毒", "地",
    "飛", "超", "虫", "岩", "霊", "竜", "悪", "鋼", "妖"];

export const typeNameENG = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground",
    "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

// タイプ相性(数値は倍率)
export const atk2Def = [
    // 0  1  2  3  4 5  6  7  8 9  10 11 12 13 14 15 16 17
    // 無 炎 水 草 電 氷 闘 毒 地 飛 超 虫 岩 霊 竜 悪 鋼 妖
      [ 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 無
      [ 1, 0.5, 2, 0.5, 1, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5], // 炎
      [ 1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1], // 水
      [ 1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1], // 草
      [ 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1], // 電
      [ 1, 2, 1, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1], // 水
      [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2], // 闘
      [ 1, 1, 1, 0.5, 1, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5], // 毒
      [ 1, 1, 2, 2, 0, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1], // 地
      [ 1, 1, 1, 0.5, 2, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1], // 飛
      [ 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1], // 超
      [ 1, 2, 1, 0.5, 1, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 0.5], // 虫
      [ 0.5, 0.5, 2, 2, 1, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1], // 岩
      [ 0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1], // 霊
      [ 1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2], // 竜
      [ 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2], // 悪
      [ 0.5, 2, 1, 0.5, 1, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 2], // 銅
      [ 1, 1, 1, 1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 1, 0, 0.5, 2, 1], // 妖
];

export function chooseRandomTypeId() {
    const max = typeCount;
    const chooseTypeId = Math.floor(Math.random() * max);
    return chooseTypeId;
}

/**
 * 単タイプの相性を確認
 * @param {int} atkTypeId 
 * @param {int} defTypeId 
 * @returns damageMag
 */
export function checkSingleTypeComp(atkTypeId, defTypeId) {
    const damageMag = atk2Def[defTypeId][atkTypeId];
    return damageMag;
    }
    
export function checkMultiTypeComp(atkTypeId, defTypeId1, defTypeId2) {
    const damageMag1 = atk2Def[defTypeId1][atkTypeId];
    const damagaMag2 = atk2Def[defTypeId2][atkTypeId];
    return damagaMag1 * damageMag2;
}