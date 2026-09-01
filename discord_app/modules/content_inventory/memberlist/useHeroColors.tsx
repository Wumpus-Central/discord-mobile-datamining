// === Module 8042: useHeroColors ===

// Module 8042 (useHeroColors)
import nDefault from "n" /* 689 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_6 from "handleThemeChange" /* 1302 */;

const require = arg1;
let c7 = 0.725;
const result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  const items = [closure_5];
  const stateFromStores = first(589).useStateFromStores(items, () => saturation.saturation);
  let obj = first(589);
  const items1 = [closure_6];
  const stateFromStores1 = first(589).useStateFromStores(items1, () => theme.theme);
  let obj2 = first(589);
  const fallbackHeroColor = first(8043).getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj3 = first(8043);
  let tmp4 = callback(first(8041).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [first, tmp4[1]];
  return React.useMemo(() => {
    let tmp = closure_1_2;
    let obj = first(closure_1_2[7]);
    const hex2intResult = obj.hex2int(first);
    const hex2intResult1 = first(closure_1_2[7]).hex2int(callback);
    const obj2 = first(closure_1_2[7]);
    let num = 1;
    let tmp4 = hex2intResult;
    let tmp5 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < closure_1_7) {
      const obj4 = callback(closure_1_2[8])(tmp4);
      const numResult = callback(closure_1_2[8])(tmp4).darken(0.5).num();
      const sum = num + 1;
      tmp = closure_1_2;
      tmp5 = numResult;
      while (sum < 8) {
        let tmp10 = first;
        let obj6 = first(tmp7[7]);
        let tmp11 = closure_1_7;
        num = sum;
        tmp4 = numResult;
        tmp = tmp7;
        tmp5 = numResult;
        if (obj6.getDarkness(numResult) >= closure_1_7) {
          break;
        }
      }
      const darkenResult = callback(closure_1_2[8])(tmp4).darken(0.5);
    }
    obj3 = first(closure_1_2[7]);
    let num2 = 1;
    let tmp12 = hex2intResult1;
    let tmp13 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < closure_1_7) {
      const obj8 = callback(closure_1_2[8])(tmp12);
      const numResult1 = callback(closure_1_2[8])(tmp12).darken(0.5).num();
      const sum1 = num2 + 1;
      tmp = closure_1_2;
      tmp13 = numResult1;
      while (sum1 < 8) {
        let tmp18 = first;
        let obj10 = first(tmp15[7]);
        let tmp19 = closure_1_7;
        num2 = sum1;
        tmp12 = numResult1;
        tmp = tmp15;
        tmp13 = numResult1;
        if (obj10.getDarkness(numResult1) >= closure_1_7) {
          break;
        }
      }
      const darkenResult1 = callback(closure_1_2[8])(tmp12).darken(0.5);
    }
    obj = { primaryColor: null, secondaryColor: null };
    obj7 = first(tmp[7]);
    obj[0] = first(tmp[7]).int2hex(tmp5);
    const obj12 = first(tmp[7]);
    obj[1] = first(tmp[7]).int2hex(tmp13);
    return obj;
  }, items2);
};
export const getHeroColors = function getHeroColors(game_name) {
  let obj = num(8043);
  const fallbackHeroColor = obj.getFallbackHeroColor(theme.theme, closure_5.saturation);
  num = undefined;
  num = 1;
  if (closure_5.desaturateUserColors) {
    num = tmp.saturation;
  }
  const useColorStore = tmp2(8041).useColorStore;
  const arr = useColorStore.getState().palette[game_name];
  let mapped;
  if (arr != null) {
    mapped = arr.map((arg0) => {
      [tmp, tmp2, tmp3] = arg0;
      let obj = closure_1_1(closure_1_2[5])({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = obj.toHsl());
      obj = { h, s: s * num, l };
      const toHslResult = obj.toHsl();
      return closure_1_1(closure_1_2[5])(obj).toHexString();
    });
  }
  if (mapped == null) {
    const items = [fallbackHeroColor, fallbackHeroColor];
    mapped = items;
  }
  [tmp7, tmp8] = callback(mapped, 2);
  let tmp2Result = tmp2(688);
  const hex2intResult = tmp2Result.hex2int(tmp7);
  tmp2Result = tmp2(688);
  const hex2intResult1 = tmp2Result.hex2int(tmp8);
  tmp = closure_5;
  const tmp6 = callback(mapped, 2);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  if (tmp2Result1.getDarkness(hex2intResult) < c7) {
    const obj5 = nDefault(tmp11);
    const tmp14 = dependencyMap;
    const numResult = nDefault(tmp11).darken(0.5).num();
    const sum = num2 + 1;
    tmp12 = numResult;
    while (sum < 8) {
      let tmp17 = num;
      let obj7 = num(688);
      let tmp18 = c7;
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      let tmp3 = tmp14;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
    const darkenResult = nDefault(tmp11).darken(0.5);
  }
  tmp2Result1 = num(688);
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = nDefault(tmp19);
    const tmp22 = dependencyMap;
    const numResult1 = nDefault(tmp19).darken(0.5).num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    while (sum1 < 8) {
      let tmp25 = num;
      let obj11 = num(688);
      let tmp26 = c7;
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      tmp3 = tmp22;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
    const darkenResult1 = nDefault(tmp19).darken(0.5);
  }
  obj = { primaryColor: null, secondaryColor: null };
  obj8 = num(688);
  obj[0] = num(688).int2hex(tmp12);
  const obj13 = num(688);
  obj[1] = num(688).int2hex(tmp20);
  return obj;
};