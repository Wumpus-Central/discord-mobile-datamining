// === Module 8716: useHeroColors ===

// Module 8716 (useHeroColors)
import _modDef671 from "module_671" /* 671 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import tinycolorDefault from "tinycolor" /* 7730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ThemeStore from "ThemeStore" /* 1192 */;

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
  const fallbackHeroColor = first(8717).getFallbackHeroColor(stateFromStores1, stateFromStores);
  let obj3 = first(8717);
  let tmp4 = _slicedToArray(first(8715).useAvatarColors(pendingAvatarSrc, fallbackHeroColor), 2);
  first = tmp4[0];
  closure_1 = tmp6;
  const items2 = [first, tmp4[1]];
  return noop.useMemo(() => {
    const hex2intResult = utils_ColorUtils.hex2int(first);
    const hex2intResult1 = utils_ColorUtils.hex2int(closure_1);
    let num = 1;
    let tmp4 = hex2intResult;
    let tmp5 = hex2intResult;
    if (obj3.getDarkness(hex2intResult) < c7) {
      const obj4 = _modDef671(tmp4);
      const numResult = _modDef671(tmp4).darken(0.5).num();
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
      const darkenResult = _modDef671(tmp4).darken(0.5);
    }
    obj3 = utils_ColorUtils;
    let num2 = 1;
    let tmp12 = hex2intResult1;
    let tmp13 = hex2intResult1;
    if (obj7.getDarkness(hex2intResult1) < c7) {
      const obj8 = _modDef671(tmp12);
      const numResult1 = _modDef671(tmp12).darken(0.5).num();
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
      const darkenResult1 = _modDef671(tmp12).darken(0.5);
    }
    const obj5 = { primaryColor: null, secondaryColor: null };
    obj7 = utils_ColorUtils;
    obj5.primaryColor = utils_ColorUtils.int2hex(tmp5);
    obj5.secondaryColor = utils_ColorUtils.int2hex(tmp13);
    return obj5;
  }, items2);
};
export function getHeroColors(game_name) {
  const fallbackHeroColor = num(8717).getFallbackHeroColor(ThemeStore.theme, AccessibilityStore.saturation);
  num = 1;
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const useColorStore = tmp2(8715).useColorStore;
  const arr = useColorStore.getState().palette[game_name];
  let mapped;
  if (arr != null) {
    mapped = arr.map((item) => {
      [tmp, tmp2, tmp3] = item;
      const obj = tinycolorDefault({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = tinycolorDefault({ r: tmp, g: tmp2, b: tmp3 }).toHsl());
      const obj2 = { h, s: s * num, l };
      const toHslResult = tinycolorDefault({ r: tmp, g: tmp2, b: tmp3 }).toHsl();
      return tinycolorDefault({ h, s: s * num, l }).toHexString();
    });
  }
  if (mapped == null) {
    const items = [fallbackHeroColor, fallbackHeroColor];
    mapped = items;
  }
  let obj = num(8717);
  [tmp7, tmp8] = mapped;
  const tmp6 = _slicedToArray(mapped, 2);
  const hex2intResult = num(1090).hex2int(tmp7);
  const tmp2Result = num(1090);
  const hex2intResult1 = num(1090).hex2int(tmp8);
  const tmp2Result3 = num(1090);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  if (tmp2Result4.getDarkness(hex2intResult) < c7) {
    const obj5 = _modDef671(tmp11);
    const numResult = _modDef671(tmp11).darken(0.5).num();
    const sum = num2 + 1;
    tmp12 = numResult;
    while (sum < 8) {
      let obj7 = num(1090);
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
    const darkenResult = _modDef671(tmp11).darken(0.5);
  }
  tmp2Result4 = num(1090);
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = _modDef671(tmp19);
    const numResult1 = _modDef671(tmp19).darken(0.5).num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    while (sum1 < 8) {
      let obj11 = num(1090);
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
    const darkenResult1 = _modDef671(tmp19).darken(0.5);
  }
  let obj2 = { primaryColor: null, secondaryColor: null };
  obj8 = num(1090);
  obj2.primaryColor = num(1090).int2hex(tmp12);
  const obj13 = num(1090);
  obj2.secondaryColor = num(1090).int2hex(tmp20);
  return obj2;
}