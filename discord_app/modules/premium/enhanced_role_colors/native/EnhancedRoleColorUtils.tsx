// discord_app/modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
import nDefault from "../../../../../_runtime/00689_n.js";
import isDiscordFrontendDevelopment from "../../../../utils/GlobalUtils.tsx";
import useHasEnhancedRoleColors from "../../powerups/hooks/useHasEnhancedRoleColors.tsx";
import useHasEnhancedRoleColorsDefault from "../../powerups/hooks/useHasEnhancedRoleColors.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { processColor } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../user_settings/ThemeStore.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";

require = arg1;
function processColorStrings(colorStrings) {
  if (null != colorStrings) {
    const primaryColor = colorStrings.primaryColor;
    if (theme.theme === ThemeTypes.LIGHT) {
      if (null != primaryColor) {
        let obj = nDefault(primaryColor);
        let tmp10 = processColor;
        [tmp7, tmp8, tmp9] = callback(obj.hsl(), 3);
        const tmp6 = callback(obj.hsl(), 3);
        const obj2 = nDefault;
        let tmp12Result = processColor(nDefault.hsl(tmp7, tmp8, 0.85 * tmp9).hex());
        const hslResult = nDefault.hsl(tmp7, tmp8, 0.85 * tmp9);
      }
      obj = { primaryColor: null, secondaryColor: null, tertiaryColor: null };
      obj[0] = tmp12Result;
      const secondaryColor = colorStrings.secondaryColor;
      if (tmp.theme === tmp2.LIGHT) {
        if (null != secondaryColor) {
          const obj5 = nDefault(secondaryColor);
          [tmp17, tmp18, tmp19] = callback(nDefault(secondaryColor).hsl(), 3);
          const tmp16 = callback(nDefault(secondaryColor).hsl(), 3);
          const obj6 = nDefault;
          let tmp10Result = tmp10(nDefault.hsl(tmp17, tmp18, 0.85 * tmp19).hex());
          const hslResult1 = nDefault.hsl(tmp17, tmp18, 0.85 * tmp19);
        }
        obj[1] = tmp10Result;
        const tertiaryColor = colorStrings.tertiaryColor;
        if (tmp.theme === tmp2.LIGHT) {
          if (null != tertiaryColor) {
            const obj8 = nDefault(tertiaryColor);
            [tmp25, tmp26, tmp27] = callback(nDefault(tertiaryColor).hsl(), 3);
            const tmp24 = callback(nDefault(tertiaryColor).hsl(), 3);
            const obj9 = nDefault;
            tmp10Result = tmp10(nDefault.hsl(tmp25, tmp26, 0.85 * tmp27).hex());
            const hslResult2 = nDefault.hsl(tmp25, tmp26, 0.85 * tmp27);
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
const result = require("set").fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export const processColorStringsArray = function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, , ];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    return items.filter(isDiscordFrontendDevelopment.isNotNullish);
  }
};
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  closure_0 = colorStrings;
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
      ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = closure_1_8(tmp));
      items = items1.filter(colorStrings(closure_1_2[6]).isNotNullish);
      const tmp3 = closure_1_8(tmp);
    }
    return items;
  }, items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(guildId, id) {
  return useHasEnhancedRoleColors.getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = function useIsRoleStyleAndRoleColorsEligibleForERC(guildId, id, stateFromStores, processColorStringsArray) {
  let tmp = useHasEnhancedRoleColorsDefault(guildId, id);
  if (tmp) {
    tmp = "username" === stateFromStores;
  }
  if (tmp) {
    tmp = processColorStringsArray.length > 1;
  }
  return tmp;
};