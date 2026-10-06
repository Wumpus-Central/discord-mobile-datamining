// discord_app/modules/content_inventory/memberlist/useHeroColors.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import _modDef7076 from "../../../../_runtime/metro/07076__.js";
import useAvatarColor from "../../avatar/useAvatarColor.tsx";
import getFallbackHeroColor from "getFallbackHeroColor.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c7 = 0.725;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let saturation;
      let theme;
      let tmp17;
      let tmp18;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(14);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ThemeStore];
        const fn2 = function h() {
          return theme.theme;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult7 = get_initialized;
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores) {
        let tmp12;
        if (cResult[5] === stateFromStores1) {
          tmp12 = cResult[6];
        }
        const tmpResult8 = useAvatarColor;
        [tmp17, tmp18] = tmpResult8.useAvatarColors(arg0, tmp12);
        _slicedToArray(tmpResult8.useAvatarColors(arg0, tmp12), 2);
        if (cResult[7] === tmp17) {
          let tmp19;
          let tmp20;
          if (cResult[8] === tmp18) {
            tmp19 = cResult[9];
            tmp20 = cResult[10];
          }
          if (cResult[11] === tmp19) {
            let tmp45;
            if (cResult[12] === tmp20) {
              tmp45 = cResult[13];
            }
            return tmp45;
          }
          const obj2 = { primaryColor: tmp19, secondaryColor: tmp20 };
          cResult[11] = tmp19;
          cResult[12] = tmp20;
          cResult[13] = obj2;
          tmp45 = obj2;
        }
        const tmpResult9 = utils_ColorUtils;
        const hex2intResult = tmpResult9.hex2int(tmp17);
        const tmpResult10 = utils_ColorUtils;
        const hex2intResult1 = tmpResult10.hex2int(tmp18);
        let num9 = 1;
        let tmp24 = hex2intResult;
        let tmp25 = hex2intResult;
        const tmpResult11 = utils_ColorUtils;
        if (tmpResult11.getDarkness(hex2intResult) < c7) {
          const obj9 = _modDef683(tmp24);
          const darkenResult = obj9.darken(0.5);
          const numResult = darkenResult.num();
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
        }
        let num10 = 1;
        let tmp34 = hex2intResult1;
        let tmp35 = hex2intResult1;
        const obj12 = utils_ColorUtils;
        if (obj12.getDarkness(hex2intResult1) < c7) {
          const obj13 = _modDef683(tmp34);
          const darkenResult1 = obj13.darken(0.5);
          const numResult1 = darkenResult1.num();
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
        }
        const obj16 = utils_ColorUtils;
        const int2hexResult = obj16.int2hex(tmp25);
        const obj17 = utils_ColorUtils;
        const int2hexResult1 = obj17.int2hex(tmp35);
        cResult[7] = tmp17;
        cResult[8] = tmp18;
        cResult[9] = int2hexResult;
        cResult[10] = int2hexResult1;
        tmp20 = int2hexResult1;
        tmp19 = int2hexResult;
      }
      const tmpResult12 = getFallbackHeroColor;
      const fallbackHeroColor = tmpResult12.getFallbackHeroColor(stateFromStores1, stateFromStores);
      cResult[4] = stateFromStores;
      cResult[5] = stateFromStores1;
      cResult[6] = fallbackHeroColor;
      tmp12 = fallbackHeroColor;
    }
  : (arg0) => {
      let first;
      let saturation;
      let theme;
      let obj = first(504);
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
      let obj2 = first(504);
      const items1 = [ThemeStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => theme.theme);
      let obj3 = first(7828);
      const fallbackHeroColor = obj3.getFallbackHeroColor(stateFromStores1, stateFromStores);
      let obj4 = first(7826);
      let tmp4 = _slicedToArray(obj4.useAvatarColors(arg0, fallbackHeroColor), 2);
      first = tmp4[0];
      let closure_1 = tmp6;
      const items2 = [first, tmp4[1]];
      return react.useMemo(() => {
        let obj12;
        let obj13;
        const obj = utils_ColorUtils;
        const hex2intResult = obj.hex2int(first);
        const obj2 = utils_ColorUtils;
        const hex2intResult1 = obj2.hex2int(closure_1);
        let num = 1;
        let tmp4 = hex2intResult;
        let tmp5 = hex2intResult;
        const obj3 = utils_ColorUtils;
        if (obj3.getDarkness(hex2intResult) < c7) {
          const obj4 = _modDef683(tmp4);
          const darkenResult = obj4.darken(0.5);
          const numResult = darkenResult.num();
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
        }
        let num2 = 1;
        let tmp12 = hex2intResult1;
        let tmp13 = hex2intResult1;
        const obj7 = utils_ColorUtils;
        if (obj7.getDarkness(hex2intResult1) < c7) {
          const obj8 = _modDef683(tmp12);
          const darkenResult1 = obj8.darken(0.5);
          const numResult1 = darkenResult1.num();
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
        }
        const obj5 = { primaryColor: obj12.int2hex(tmp5), secondaryColor: obj13.int2hex(tmp13) };
        obj12 = utils_ColorUtils;
        obj13 = utils_ColorUtils;
        return obj5;
      }, items2);
    };
const result = size.fileFinishedImporting("modules/content_inventory/memberlist/useHeroColors.tsx");

export default tmp2;
export const getHeroColors = function getHeroColors(iconURL) {
  let num;
  let obj13;
  let obj14;
  let tmp7;
  let tmp8;
  const tmp2 = num;
  let tmp3 = dependencyMap;
  const saturation = AccessibilityStore.saturation;
  const theme = ThemeStore.theme;
  let obj = num(7828);
  const fallbackHeroColor = obj.getFallbackHeroColor(theme, saturation);
  num = 1;
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const useColorStore = tmp2(7826).useColorStore;
  const arr = useColorStore.getState().palette[iconURL];
  let mapped;
  if (arr != null) {
    mapped = arr.map((item) => {
      let h;
      let l;
      let s;
      let tmp;
      let tmp2;
      let tmp3;
      [tmp, tmp2, tmp3] = item;
      const obj = _modDef7076({ r: tmp, g: tmp2, b: tmp3 });
      ({ h, s, l } = obj.toHsl());
      const obj2 = { h, s: s * num, l };
      obj.toHsl();
      const obj3 = _modDef7076(obj2);
      return obj3.toHexString();
    });
  }
  if (mapped == null) {
    const items = [fallbackHeroColor, fallbackHeroColor];
    mapped = items;
  }
  [tmp7, tmp8] = mapped;
  _slicedToArray(mapped, 2);
  const tmp2Result = tmp2(1103);
  const hex2intResult = tmp2Result.hex2int(tmp7);
  const tmp2Result3 = tmp2(1103);
  const hex2intResult1 = tmp2Result3.hex2int(tmp8);
  let num2 = 1;
  let tmp11 = hex2intResult;
  let tmp12 = hex2intResult;
  const tmp2Result4 = tmp2(1103);
  if (tmp2Result4.getDarkness(hex2intResult) < c7) {
    const obj5 = _modDef683(tmp11);
    const darkenResult = obj5.darken(0.5);
    const numResult = darkenResult.num();
    const sum = num2 + 1;
    tmp12 = numResult;
    tmp3 = dependencyMap;
    while (sum < 8) {
      let obj7 = num(1103);
      num2 = sum;
      tmp11 = numResult;
      tmp12 = numResult;
      tmp3 = dependencyMap;
      if (obj7.getDarkness(numResult) >= c7) {
        break;
      }
    }
  }
  let num3 = 1;
  let tmp19 = hex2intResult1;
  let tmp20 = hex2intResult1;
  const obj8 = num(1103);
  if (obj8.getDarkness(hex2intResult1) < c7) {
    const obj9 = _modDef683(tmp19);
    const darkenResult1 = obj9.darken(0.5);
    const numResult1 = darkenResult1.num();
    const sum1 = num3 + 1;
    tmp20 = numResult1;
    tmp3 = dependencyMap;
    while (sum1 < 8) {
      let obj11 = num(1103);
      num3 = sum1;
      tmp19 = numResult1;
      tmp20 = numResult1;
      tmp3 = dependencyMap;
      if (obj11.getDarkness(numResult1) >= c7) {
        break;
      }
    }
  }
  let obj2 = { primaryColor: obj13.int2hex(tmp12), secondaryColor: obj14.int2hex(tmp20) };
  obj13 = num(1103);
  obj14 = num(1103);
  return obj2;
};
