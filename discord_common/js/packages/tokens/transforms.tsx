// === Module 684: transforms ===

// Module 684 (transforms)
import _modDef683 from "module_683" /* 683 */;
import size from "module_2" /* 2 */;

let set, set2;

function interpolate(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const result = (tmp + tmp2) / 2;
  let tmp6 = result;
  if (arg2 !== result) {
    let sum;
    if (arg2 < result) {
      sum = tmp3 + (arg2 - tmp) / (result - tmp) * (result - tmp3);
    } else {
      sum = result + (arg2 - result) / (tmp2 - result) * (tmp4 - result);
    }
    tmp6 = sum;
  }
  return tmp6;
}
const constants = { BACKGROUND_LIGHTNESS_LIGHT_THEME: "*0.975", BACKGROUND_LIGHTNESS_DARK_THEME: "*1.6", BACKGROUND_SATURATION: "*0.8", TEXT_LIGHTNESS_LIGHT_THEME: "*1.05", TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME: 0.85, [0.85]: "TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME", TEXT_LIGHTNESS_MAX_DARK_THEME: 0.6, [0.6]: "TEXT_LIGHTNESS_MAX_DARK_THEME" };
const constants2 = { BORDER_MIN_OPACITY: 0.3, [0.3]: "BORDER_MIN_OPACITY", TEXT_LIGHTNESS_LIGHT_THEME: "*0.6", TEXT_LIGHTNESS_DARK_THEME: "*1.5", TEXT_SATURATION: "*2", BACKGROUND_LIGHTNESS_DARK_THEME: "*0.9" };
let closure_5 = [0, 2];
let closure_6 = [1.3, 0.7];
let closure_7 = [0.98, 1];
let closure_8 = [0.75, 1.5];
let closure_9 = [1.45, 0.45];
let result = size.fileFinishedImporting("../discord_common/js/packages/tokens/transforms.tsx");

export const transformColorForReducedContrast = function transformColorForReducedContrast(arg0, arg1, arg2) {
  let BACKGROUND_LIGHTNESS_LIGHT_THEME;
  let tmp9;
  if ("background" !== arg1) {
    if ("border" !== arg1) {
      if ("text" === arg1) {
        let TEXT_LIGHTNESS_LIGHT_THEME;
        set = _modDef683(arg0).set;
        if ("light" === arg2) {
          TEXT_LIGHTNESS_LIGHT_THEME = constants.TEXT_LIGHTNESS_LIGHT_THEME;
        } else {
          const _Math = Math;
          TEXT_LIGHTNESS_LIGHT_THEME = Math.max(tmp4 * constants.TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME, constants.TEXT_LIGHTNESS_MAX_DARK_THEME);
        }
        const result = set("hsl.l", TEXT_LIGHTNESS_LIGHT_THEME);
        return result.hex();
      } else {
        return arg0;
      }
    }
  }
  set2 = _modDef683(arg0).set;
  if ("light" === arg2) {
    BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_DARK_THEME;
    tmp9 = constants;
  } else {
    tmp9 = constants;
    BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_LIGHT_THEME;
  }
  const set2Result = set2("hsl.l", BACKGROUND_LIGHTNESS_LIGHT_THEME);
  const result1 = set2Result.set("hsl.s", tmp9.BACKGROUND_SATURATION);
  return result1.hex();
};
export const transformColorForIncreasedContrast = function transformColorForIncreasedContrast(arg0, arg1, arg2, arg3) {
  let items3;
  if ("border" === arg2) {
    const items = [arg0, constants2.BORDER_MIN_OPACITY + arg1];
    items3 = items;
  } else if ("text" === arg2) {
    let TEXT_LIGHTNESS_DARK_THEME;
    let tmp7;
    set = _modDef683(arg0).set;
    if ("light" === arg3) {
      TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_LIGHT_THEME;
      tmp7 = constants2;
    } else {
      tmp7 = constants2;
      TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_DARK_THEME;
    }
    const result = set("hsl.l", TEXT_LIGHTNESS_DARK_THEME);
    const result1 = result.set("hsl.s", tmp7.TEXT_SATURATION);
    const items1 = [result1.hex(), arg1];
    items3 = items1;
  } else {
    if ("background" === arg2) {
      if ("light" !== arg3) {
        const obj = _modDef683(arg0);
        const result2 = obj.set("hsl.l", constants2.BACKGROUND_LIGHTNESS_DARK_THEME);
        const items2 = [result2.hex(), arg1];
        items3 = items2;
      }
    }
    items3 = [arg0, arg1];
  }
  return items3;
};
export const transformColorForReducedSaturation = function transformColorForReducedSaturation(result, category, saturation) {
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  const obj = _modDef683(result);
  if ("background" === category) {
    [tmp2, tmp3] = [0, 1];
    const items = [0.25, 1];
    [tmp5, tmp6] = items;
    const _HermesInternal2 = HermesInternal;
    result = obj.set("hsl.s", "*" + tmp5 + (saturation - tmp2) / (tmp3 - tmp2) * (tmp6 - tmp5));
    return result.hex();
  } else {
    const _HermesInternal = HermesInternal;
    const result1 = obj.set("hsl.s", "*" + saturation);
    return result1.hex();
  }
};
export const transformColorContrast = function transformColorContrast(result, category, theme, contrast) {
  if ("background" !== category) {
    if ("border" !== category) {
      if ("text" === category) {
        const _HermesInternal = HermesInternal;
        const obj = _modDef683(result);
        result = obj.set("hsl.l", "*" + interpolate(closure_5, "light" === theme ? closure_9 : closure_8, contrast));
        return result.hex();
      } else {
        return result;
      }
    }
  }
  const obj3 = _modDef683(result);
  const result1 = obj3.set("hsl.l", "*" + interpolate(closure_5, "light" === theme ? closure_7 : closure_6, contrast));
  return result1.hex();
};