// discord_app/modules/content_inventory/memberlist/useHeroColors.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import handleThemeChange from "handleThemeChange";
import { n } from "../../../../_runtime/00689_n.js";

const require = arg1;
let c7 = 0.725;
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = first(589).useStateFromStores(items, () => saturation.saturation);
  let obj = first(589);
  const items1 = [handleThemeChange];
  const stateFromStores1 = first(589).useStateFromStores(items1, () => theme.theme);
  let obj2 = first(589);
  const fallbackHeroColor = first(8237).getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj3 = first(8237);
  let tmp4 = callback(first(8235).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  first = tmp4[0];
  const importDefault = tmp6;
  const items2 = [first, tmp4[1]];
  return React.useMemo(() => {
    let tmp = outer1_2;
    let obj = first(outer1_2[7]);
    const hex2intResult = obj.hex2int(first);
    const hex2intResult1 = first(outer1_2[7]).hex2int(tmp6);
    const obj2 = first(outer1_2[7]);
    let num = 1;
    let tmp4 = hex2intResult;
    let tmp5 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < outer1_7) {
      const obj4 = tmp6(outer1_2[8])(tmp4);
      const numResult = tmp6(outer1_2[8])(tmp4).darken(0.5).num();
      const sum = num + 1;
      tmp = outer1_2;
      tmp5 = numResult;
      while (sum < 8) {
        let tmp10 = first;
        let obj6 = first(tmp7[7]);
        let tmp11 = outer1_7;
        num = sum;
        tmp4 = numResult;
        tmp = tmp7;
        tmp5 = numResult;
        if (obj6.getDarkness(numResult) >= outer1_7) {
          break;
        }
      }
      const darkenResult = tmp6(outer1_2[8])(tmp4).darken(0.5);
    }
    obj3 = first(outer1_2[7]);
    let num2 = 1;
    let tmp12 = hex2intResult1;
    let tmp13 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < outer1_7) {
      const obj8 = tmp6(outer1_2[8])(tmp12);
      const numResult1 = tmp6(outer1_2[8])(tmp12).darken(0.5).num();
      const sum1 = num2 + 1;
      tmp = outer1_2;
      tmp13 = numResult1;
      while (sum1 < 8) {
        let tmp18 = first;
        let obj10 = first(tmp15[7]);
        let tmp19 = outer1_7;
        num2 = sum1;
        tmp12 = numResult1;
        tmp = tmp15;
        tmp13 = numResult1;
        if (obj10.getDarkness(numResult1) >= outer1_7) {
          break;
        }
      }
      const darkenResult1 = tmp6(outer1_2[8])(tmp12).darken(0.5);
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
  let tmp7;
  let tmp8;
  let obj = num(8237);
  const fallbackHeroColor = obj.getFallbackHeroColor(theme.theme, maybeApplyNoTextColorForLightCustomTheme.saturation);
  num = undefined;
  num = 1;
  if (maybeApplyNoTextColorForLightCustomTheme.desaturateUserColors) {
    num = tmp.saturation;
  }
  const useColorStore = tmp2(8235).useColorStore;
  const arr = useColorStore.getState().palette[game_name];
  let mapped;
  if (arr != null) {
    mapped = arr.map((arg0) => {
      let h;
      let l;
      let s;
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = arg0;
      let obj = outer1_1(outer1_2[5])({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = obj.toHsl());
      obj = { h, s: s * num, l };
      const toHslResult = obj.toHsl();
      return outer1_1(outer1_2[5])(obj).toHexString();
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
  tmp = maybeApplyNoTextColorForLightCustomTheme;
  const tmp6 = callback(mapped, 2);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  if (tmp2Result1.getDarkness(hex2intResult) < c7) {
    const obj5 = n(tmp11);
    const tmp14 = dependencyMap;
    const numResult = n(tmp11).darken(0.5).num();
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
    const darkenResult = n(tmp11).darken(0.5);
  }
  tmp2Result1 = num(688);
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = n(tmp19);
    const tmp22 = dependencyMap;
    const numResult1 = n(tmp19).darken(0.5).num();
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
    const darkenResult1 = n(tmp19).darken(0.5);
  }
  obj = { primaryColor: null, secondaryColor: null };
  obj8 = num(688);
  obj[0] = num(688).int2hex(tmp12);
  const obj13 = num(688);
  obj[1] = num(688).int2hex(tmp20);
  return obj;
};