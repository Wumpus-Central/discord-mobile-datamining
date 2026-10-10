// discord_app/modules/content_inventory/memberlist/useHeroColors.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import tinycolorDefault from "../../../../_runtime/07273_tinycolor.js";
import useAvatarColor from "../../avatar/useAvatarColor.tsx";
import getFallbackHeroColor from "getFallbackHeroColor.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
let c7 = 0.725;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useHeroColors(arg0) {
      const cResult = c.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function i() {
          return saturation.saturation;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ThemeStore];
        const fn2 = function h() {
          return theme.theme;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === stateFromStores1) {
          let tmp12 = cResult[6];
        }
        const tmpResult8 = useAvatarColor;
        [tmp17, tmp18] = useAvatarColor.useAvatarColors(arg0, tmp12);
        if (cResult[7] === tmp17) {
          if (cResult[8] === tmp18) {
            let tmp19 = cResult[9];
            let tmp20 = cResult[10];
          }
          if (cResult[11] === tmp19) {
            if (cResult[12] === tmp20) {
              let tmp45 = cResult[13];
            }
            return tmp45;
          }
          const obj2 = { primaryColor: tmp19, secondaryColor: tmp20 };
          cResult[11] = tmp19;
          cResult[12] = tmp20;
          cResult[13] = obj2;
          tmp45 = obj2;
        }
        const tmp16 = _slicedToArray(useAvatarColor.useAvatarColors(arg0, tmp12), 2);
        const hex2intResult = utils_ColorUtils.hex2int(tmp17);
        const tmpResult9 = utils_ColorUtils;
        const hex2intResult1 = utils_ColorUtils.hex2int(tmp18);
        const tmpResult10 = utils_ColorUtils;
        let num9 = 1;
        let tmp24 = hex2intResult;
        let tmp25 = hex2intResult;
        if (tmpResult11.getDarkness(hex2intResult) < c7) {
          const obj9 = _modDef683(tmp24);
          const numResult = _modDef683(tmp24).darken(0.5).num();
          const sum = num9 + 1;
          tmp25 = numResult;
          while (sum < 8) {
            let obj11 = utils_ColorUtils;
            num9 = sum;
            tmp24 = numResult;
            tmp25 = numResult;
            if (obj11.getDarkness(numResult) >= c7) {
              break;
            }
          }
          const darkenResult = _modDef683(tmp24).darken(0.5);
        }
        tmpResult11 = utils_ColorUtils;
        let num10 = 1;
        let tmp34 = hex2intResult1;
        let tmp35 = hex2intResult1;
        if (obj12.getDarkness(hex2intResult1) < c7) {
          const obj13 = _modDef683(tmp34);
          const numResult1 = _modDef683(tmp34).darken(0.5).num();
          const sum1 = num10 + 1;
          tmp35 = numResult1;
          while (sum1 < 8) {
            let obj15 = utils_ColorUtils;
            num10 = sum1;
            tmp34 = numResult1;
            tmp35 = numResult1;
            if (obj15.getDarkness(numResult1) >= c7) {
              break;
            }
          }
          const darkenResult1 = _modDef683(tmp34).darken(0.5);
        }
        obj12 = utils_ColorUtils;
        const int2hexResult = utils_ColorUtils.int2hex(tmp25);
        const int2hexResult1 = utils_ColorUtils.int2hex(tmp35);
        cResult[7] = tmp17;
        cResult[8] = tmp18;
        cResult[9] = int2hexResult;
        cResult[10] = int2hexResult1;
        tmp20 = int2hexResult1;
        tmp19 = int2hexResult;
      }
      const tmpResult7 = initialize;
      const fallbackHeroColor = getFallbackHeroColor.getFallbackHeroColor(stateFromStores1, stateFromStores);
      cResult[4] = stateFromStores;
      cResult[5] = stateFromStores1;
      cResult[6] = fallbackHeroColor;
      tmp12 = fallbackHeroColor;
      const tmpResult12 = getFallbackHeroColor;
    }
  : function useHeroColors(arg0) {
      const items = [AccessibilityStore];
      const stateFromStores = first(504).useStateFromStores(items, () => saturation.saturation);
      let obj = first(504);
      const items1 = [ThemeStore];
      const stateFromStores1 = first(504).useStateFromStores(items1, () => theme.theme);
      let obj2 = first(504);
      const fallbackHeroColor = first(8270).getFallbackHeroColor(stateFromStores1, stateFromStores);
      let obj3 = first(8270);
      let tmp4 = _slicedToArray(first(8268).useAvatarColors(arg0, fallbackHeroColor), 2);
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
          const obj4 = _modDef683(tmp4);
          const numResult = _modDef683(tmp4).darken(0.5).num();
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
          const darkenResult = _modDef683(tmp4).darken(0.5);
        }
        obj3 = utils_ColorUtils;
        let num2 = 1;
        let tmp12 = hex2intResult1;
        let tmp13 = hex2intResult1;
        if (obj7.getDarkness(hex2intResult1) < c7) {
          const obj8 = _modDef683(tmp12);
          const numResult1 = _modDef683(tmp12).darken(0.5).num();
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
          const darkenResult1 = _modDef683(tmp12).darken(0.5);
        }
        const obj5 = { primaryColor: null, secondaryColor: null };
        obj7 = utils_ColorUtils;
        obj5.primaryColor = utils_ColorUtils.int2hex(tmp5);
        obj5.secondaryColor = utils_ColorUtils.int2hex(tmp13);
        return obj5;
      }, items2);
    };
export const getHeroColors = function getHeroColors(game_name) {
  const fallbackHeroColor = num(8270).getFallbackHeroColor(ThemeStore.theme, AccessibilityStore.saturation);
  num = 1;
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const useColorStore = tmp2(8268).useColorStore;
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
  let obj = num(8270);
  [tmp7, tmp8] = mapped;
  const tmp6 = _slicedToArray(mapped, 2);
  const hex2intResult = num(1103).hex2int(tmp7);
  const tmp2Result = num(1103);
  const hex2intResult1 = num(1103).hex2int(tmp8);
  const tmp2Result3 = num(1103);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  if (tmp2Result4.getDarkness(hex2intResult) < c7) {
    const obj5 = _modDef683(tmp11);
    const numResult = _modDef683(tmp11).darken(0.5).num();
    const sum = num2 + 1;
    tmp12 = numResult;
    while (sum < 8) {
      let obj7 = num(1103);
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
    const darkenResult = _modDef683(tmp11).darken(0.5);
  }
  tmp2Result4 = num(1103);
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = _modDef683(tmp19);
    const numResult1 = _modDef683(tmp19).darken(0.5).num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    while (sum1 < 8) {
      let obj11 = num(1103);
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
    const darkenResult1 = _modDef683(tmp19).darken(0.5);
  }
  let obj2 = { primaryColor: null, secondaryColor: null };
  obj8 = num(1103);
  obj2.primaryColor = num(1103).int2hex(tmp12);
  const obj13 = num(1103);
  obj2.secondaryColor = num(1103).int2hex(tmp20);
  return obj2;
};
