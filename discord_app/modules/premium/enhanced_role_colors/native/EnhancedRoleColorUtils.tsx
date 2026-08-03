import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { processColor } from "get ActivityIndicator";
import handleThemeChange from "handleThemeChange";
import { ThemeTypes } from "sum";

const require = arg1;
function processColorStrings(colorStrings) {
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp7;
  let tmp8;
  let tmp9;
  if (null != colorStrings) {
    const primaryColor = colorStrings.primaryColor;
    if (theme.theme === ThemeTypes.LIGHT) {
      if (null != primaryColor) {
        let obj = importDefault(689)(primaryColor);
        let tmp10 = processColor;
        [tmp7, tmp8, tmp9] = callback(obj.hsl(), 3);
        const tmp6 = callback(obj.hsl(), 3);
        const obj2 = importDefault(689);
        let tmp12Result = processColor(importDefault(689).hsl(tmp7, tmp8, 0.85 * tmp9).hex());
        const hslResult = importDefault(689).hsl(tmp7, tmp8, 0.85 * tmp9);
      }
      obj = { primaryColor: null, secondaryColor: null, tertiaryColor: null };
      obj[0] = tmp12Result;
      const secondaryColor = colorStrings.secondaryColor;
      if (tmp.theme === tmp2.LIGHT) {
        if (null != secondaryColor) {
          const obj5 = importDefault(689)(secondaryColor);
          [tmp17, tmp18, tmp19] = callback(importDefault(689)(secondaryColor).hsl(), 3);
          const tmp16 = callback(importDefault(689)(secondaryColor).hsl(), 3);
          const obj6 = importDefault(689);
          let tmp10Result = tmp10(importDefault(689).hsl(tmp17, tmp18, 0.85 * tmp19).hex());
          const hslResult1 = importDefault(689).hsl(tmp17, tmp18, 0.85 * tmp19);
        }
        obj[1] = tmp10Result;
        const tertiaryColor = colorStrings.tertiaryColor;
        if (tmp.theme === tmp2.LIGHT) {
          if (null != tertiaryColor) {
            const obj8 = importDefault(689)(tertiaryColor);
            [tmp25, tmp26, tmp27] = callback(importDefault(689)(tertiaryColor).hsl(), 3);
            const tmp24 = callback(importDefault(689)(tertiaryColor).hsl(), 3);
            const obj9 = importDefault(689);
            tmp10Result = tmp10(importDefault(689).hsl(tmp25, tmp26, 0.85 * tmp27).hex());
            const hslResult2 = importDefault(689).hsl(tmp25, tmp26, 0.85 * tmp27);
          }
          obj[2] = tmp10Result;
          return obj;
        }
        tmp10Result = tmp10(tertiaryColor);
      }
      tmp10Result = tmp10(secondaryColor);
    }
    tmp12Result = tmp12(primaryColor);
    tmp10 = tmp12;
  }
}
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export const processColorStringsArray = function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, , ];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    return items.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  }
};
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  let closure_0 = colorStrings;
  let primaryColor;
  if (colorStrings != null) {
    primaryColor = colorStrings.primaryColor;
  }
  let items = [primaryColor, , ];
  let secondaryColor;
  if (colorStrings != null) {
    secondaryColor = colorStrings.secondaryColor;
  }
  items[1] = secondaryColor;
  let tertiaryColor;
  if (colorStrings != null) {
    tertiaryColor = colorStrings.tertiaryColor;
  }
  items[2] = tertiaryColor;
  return React.useMemo(() => {
    if (null == colorStrings) {
      let items = [];
    } else {
      const items1 = [, , ];
      ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = outer1_8(tmp));
      items = items1.filter(colorStrings(outer1_2[6]).isNotNullish);
      const tmp3 = outer1_8(tmp);
    }
    return items;
  }, items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(guildId, id) {
  return require(4694) /* useHasEnhancedRoleColors */.getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = function useIsRoleStyleAndRoleColorsEligibleForERC(guildId, id, stateFromStores, processColorStringsArray) {
  let tmp = importDefault(4694)(guildId, id);
  if (tmp) {
    tmp = "username" === stateFromStores;
  }
  if (tmp) {
    tmp = processColorStringsArray.length > 1;
  }
  return tmp;
};