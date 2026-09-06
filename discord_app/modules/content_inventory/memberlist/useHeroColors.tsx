// === Module 8133: useHeroColors ===

// Module 8133 (useHeroColors)
import _modDef672 from "module_672" /* 672 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import tinycolorDefault from "tinycolor" /* 7552 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
let c7 = 0.725;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default function useHeroColors(pendingAvatarSrc) {
  const items = [AccessibilityStore];
  const stateFromStores = first(504).useStateFromStores(items, () => saturation.saturation);
  let obj = first(504);
  const items1 = [ThemeStore];
  const stateFromStores1 = first(504).useStateFromStores(items1, () => theme.theme);
  let obj2 = first(504);
  const fallbackHeroColor = first(8134).getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj3 = first(8134);
  let tmp4 = _slicedToArray(first(8132).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [first, tmp4[1]];
  return noop.useMemo(() => {
    let obj = utils_ColorUtils;
    const hex2intResult = obj.hex2int(first);
    const hex2intResult1 = utils_ColorUtils.hex2int(closure_1);
    let num = 1;
    let tmp4 = hex2intResult;
    let tmp5 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < c7) {
      const obj4 = _modDef672(tmp4);
      const numResult = _modDef672(tmp4).darken(0.5).num();
      const sum = num + 1;
      tmp5 = numResult;
      while (sum < 8) {
        let obj6 = utils_ColorUtils;
        num = sum;
        tmp4 = numResult;
        tmp5 = numResult;
        if (obj6.getDarkness(numResult) >= c7) {
          break;
        }
      }
      const darkenResult = _modDef672(tmp4).darken(0.5);
    }
    obj3 = utils_ColorUtils;
    let num2 = 1;
    let tmp12 = hex2intResult1;
    let tmp13 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < c7) {
      const obj8 = _modDef672(tmp12);
      const numResult1 = _modDef672(tmp12).darken(0.5).num();
      const sum1 = num2 + 1;
      tmp13 = numResult1;
      while (sum1 < 8) {
        let obj10 = utils_ColorUtils;
        num2 = sum1;
        tmp12 = numResult1;
        tmp13 = numResult1;
        if (obj10.getDarkness(numResult1) >= c7) {
          break;
        }
      }
      const darkenResult1 = _modDef672(tmp12).darken(0.5);
    }
    obj = { primaryColor: null, secondaryColor: null };
    obj7 = utils_ColorUtils;
    obj.primaryColor = utils_ColorUtils.int2hex(tmp5);
    obj.secondaryColor = utils_ColorUtils.int2hex(tmp13);
    return obj;
  }, items2);
};
export const getHeroColors = function getHeroColors(game_name) {
  let obj = num(8134);
  const fallbackHeroColor = obj.getFallbackHeroColor(ThemeStore.theme, AccessibilityStore.saturation);
  num = 1;
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const useColorStore = tmp2(8132).useColorStore;
  const arr = useColorStore.getState().palette[game_name];
  let mapped;
  if (arr != null) {
    mapped = arr.map((item) => {
      [tmp, tmp2, tmp3] = item;
      let obj = tinycolorDefault({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = obj.toHsl());
      obj = { h, s: s * num, l };
      const toHslResult = obj.toHsl();
      return tinycolorDefault(obj).toHexString();
    });
  }
  if (mapped == null) {
    const items = [fallbackHeroColor, fallbackHeroColor];
    mapped = items;
  }
  [tmp7, tmp8] = _slicedToArray(mapped, 2);
  let tmp2Result = tmp2(1091);
  const hex2intResult = tmp2Result.hex2int(tmp7);
  tmp2Result = tmp2(1091);
  const hex2intResult1 = tmp2Result.hex2int(tmp8);
  const tmp6 = _slicedToArray(mapped, 2);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  if (tmp2Result1.getDarkness(hex2intResult) < c7) {
    const obj5 = _modDef672(tmp11);
    const numResult = _modDef672(tmp11).darken(0.5).num();
    const sum = num2 + 1;
    tmp12 = numResult;
    while (sum < 8) {
      let obj7 = num(1091);
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
    const darkenResult = _modDef672(tmp11).darken(0.5);
  }
  tmp2Result1 = num(1091);
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = _modDef672(tmp19);
    const numResult1 = _modDef672(tmp19).darken(0.5).num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    while (sum1 < 8) {
      let obj11 = num(1091);
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
    const darkenResult1 = _modDef672(tmp19).darken(0.5);
  }
  obj = { primaryColor: null, secondaryColor: null };
  obj8 = num(1091);
  obj.primaryColor = num(1091).int2hex(tmp12);
  const obj13 = num(1091);
  obj.secondaryColor = num(1091).int2hex(tmp20);
  return obj;
};