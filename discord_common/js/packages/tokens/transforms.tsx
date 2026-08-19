// === Module 808: interpolate ===

// Module 808 (interpolate)
import set2 from "set" /* 2 */;
import nDefault from "n" /* 689 */;

function interpolate(arg0, arg1, arg2) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  let diff = arg2;
  let result = (tmp + tmp2) / 2;
  if (arg2 === result) {
    return result;
  } else if (diff < result) {
    diff = diff - tmp;
    result = diff / (result - tmp) * (result - tmp3);
    let sum = tmp3 + result;
  } else {
    sum = result + (diff - result) / (tmp2 - result) * (tmp4 - result);
  }
}
let closure_2 = { BACKGROUND_LIGHTNESS_LIGHT_THEME: "*0.975", BACKGROUND_LIGHTNESS_DARK_THEME: "*1.6", BACKGROUND_SATURATION: "*0.8", TEXT_LIGHTNESS_LIGHT_THEME: "*1.05", TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME: 0.85, [0.85]: "TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME", TEXT_LIGHTNESS_MAX_DARK_THEME: 0.6, [0.6]: "TEXT_LIGHTNESS_MAX_DARK_THEME" };
let closure_3 = { BORDER_MIN_OPACITY: 0.3, [0.3]: "BORDER_MIN_OPACITY", TEXT_LIGHTNESS_LIGHT_THEME: "*0.6", TEXT_LIGHTNESS_DARK_THEME: "*1.5", TEXT_SATURATION: "*2", BACKGROUND_LIGHTNESS_DARK_THEME: "*0.9" };
let closure_5 = [0, 2];
let closure_6 = [1.3, 0.7];
let closure_7 = [0.98, 1];
let closure_8 = [0.75, 1.5];
let closure_9 = [1.45, 0.45];
let result = set2.fileFinishedImporting("../discord_common/js/packages/tokens/transforms.tsx");

export const transformColorForReducedContrast = function transformColorForReducedContrast(arg0, arg1, arg2) {
  if ("background" !== arg1) {
    if ("border" !== arg1) {
      if ("text" === arg1) {
        if ("light" === arg2) {
          let TEXT_LIGHTNESS_LIGHT_THEME = constants.TEXT_LIGHTNESS_LIGHT_THEME;
        } else {
          const _Math = Math;
          TEXT_LIGHTNESS_LIGHT_THEME = Math.max(tmp3 * constants.TEXT_LIGHTNESS_MULTIPLIER_DARK_THEME, constants.TEXT_LIGHTNESS_MAX_DARK_THEME);
        }
        const result = nDefault(arg0).set("hsl.l", TEXT_LIGHTNESS_LIGHT_THEME);
        return result.hex();
      } else {
        return arg0;
      }
    }
  }
  if ("light" === arg2) {
    let BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_DARK_THEME;
    let tmp7 = constants;
  } else {
    tmp7 = constants;
    BACKGROUND_LIGHTNESS_LIGHT_THEME = constants.BACKGROUND_LIGHTNESS_LIGHT_THEME;
  }
  const result1 = nDefault(arg0).set("hsl.l", BACKGROUND_LIGHTNESS_LIGHT_THEME);
  const result2 = result1.set("hsl.s", tmp7.BACKGROUND_SATURATION);
  return result2.hex();
};
export const transformColorForIncreasedContrast = function transformColorForIncreasedContrast(arg0, arg1, arg2, arg3) {
  if ("border" === arg2) {
    const items = [arg0, constants2.BORDER_MIN_OPACITY + arg1];
    let items3 = items;
  } else if ("text" === arg2) {
    let set = nDefault(arg0).set;
    if ("light" === arg3) {
      let TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_LIGHT_THEME;
      let tmp7 = constants2;
    } else {
      tmp7 = constants2;
      TEXT_LIGHTNESS_DARK_THEME = constants2.TEXT_LIGHTNESS_DARK_THEME;
    }
    set = set("hsl.l", TEXT_LIGHTNESS_DARK_THEME);
    const result = set.set("hsl.s", tmp7.TEXT_SATURATION);
    const items1 = [result.hex(), arg1];
    const tmp6 = nDefault(arg0);
  } else {
    if ("background" === arg2) {
      if ("light" !== arg3) {
        const result1 = nDefault(arg0).set("hsl.l", constants2.BACKGROUND_LIGHTNESS_DARK_THEME);
        const items2 = [result1.hex(), arg1];
        items3 = items2;
        const obj = nDefault(arg0);
      }
    }
    items3 = [arg0, arg1];
  }
  return items3;
};
export const transformColorForReducedSaturation = function transformColorForReducedSaturation(result, category, saturation) {
  const obj = nDefault(result);
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
        result = nDefault(result).set("hsl.l", "*" + interpolate(closure_5, "light" === theme ? closure_9 : closure_8, contrast));
        return result.hex();
      } else {
        return result;
      }
    }
  }
  const result1 = nDefault(result).set("hsl.l", "*" + interpolate(closure_5, "light" === theme ? closure_7 : closure_6, contrast));
  return result1.hex();
};