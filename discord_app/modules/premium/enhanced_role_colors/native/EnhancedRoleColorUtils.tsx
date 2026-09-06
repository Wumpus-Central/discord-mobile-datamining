// discord_app/modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import useHasEnhancedRoleColors from "../../powerups/hooks/useHasEnhancedRoleColors.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

const useHasEnhancedRoleColorsDefault = useHasEnhancedRoleColors;

require = fn;
function processColorStrings(colorStrings) {
  if (null != colorStrings) {
    const primaryColor = colorStrings.primaryColor;
    if (ThemeStore.theme === ThemeTypes.LIGHT) {
      if (null != primaryColor) {
        let obj = _modDef672(primaryColor);
        let tmp10 = processColor;
        [tmp7, tmp8, tmp9] = _slicedToArray(obj.hsl(), 3);
        const tmp6 = _slicedToArray(obj.hsl(), 3);
        let tmp12Result = processColor(_modDef672.hsl(tmp7, tmp8, 0.85 * tmp9).hex());
        const hslResult = _modDef672.hsl(tmp7, tmp8, 0.85 * tmp9);
      }
      obj = { primaryColor: tmp12Result, secondaryColor: null, tertiaryColor: null };
      const secondaryColor = colorStrings.secondaryColor;
      if (ThemeStore.theme === ThemeTypes.LIGHT) {
        if (null != secondaryColor) {
          const obj5 = _modDef672(secondaryColor);
          [tmp17, tmp18, tmp19] = _slicedToArray(_modDef672(secondaryColor).hsl(), 3);
          const tmp16 = _slicedToArray(_modDef672(secondaryColor).hsl(), 3);
          let tmp10Result = tmp10(_modDef672.hsl(tmp17, tmp18, 0.85 * tmp19).hex());
          const hslResult1 = _modDef672.hsl(tmp17, tmp18, 0.85 * tmp19);
        }
        obj.secondaryColor = tmp10Result;
        const tertiaryColor = colorStrings.tertiaryColor;
        if (ThemeStore.theme === ThemeTypes.LIGHT) {
          if (null != tertiaryColor) {
            const obj8 = _modDef672(tertiaryColor);
            [tmp25, tmp26, tmp27] = _slicedToArray(_modDef672(tertiaryColor).hsl(), 3);
            const tmp24 = _slicedToArray(_modDef672(tertiaryColor).hsl(), 3);
            tmp10Result = tmp10(_modDef672.hsl(tmp25, tmp26, 0.85 * tmp27).hex());
            const hslResult2 = _modDef672.hsl(tmp25, tmp26, 0.85 * tmp27);
          }
          obj.tertiaryColor = tmp10Result;
          return obj;
        }
        tmp10Result = tmp10(tertiaryColor);
      }
      tmp10Result = tmp10(secondaryColor);
    }
    tmp12Result = processColor(primaryColor);
    tmp10 = processColor;
  }
}
const processColor = fn(17).processColor;
const ThemeTypes = fn(1085).ThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export const processColorStringsArray = function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, ,];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    return items.filter(GlobalUtils.isNotNullish);
  }
};
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  closure_0 = colorStrings;
  let primaryColor;
  if (colorStrings != null) {
    primaryColor = colorStrings.primaryColor;
  }
  let items = [primaryColor, ,];
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
  return noop.useMemo(() => {
    if (null == closure_0) {
      let items = [];
    } else {
      const items1 = [, ,];
      ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(tmp));
      items = items1.filter(GlobalUtils.isNotNullish);
      const tmp3 = processColorStrings(tmp);
    }
    return items;
  }, items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(
  guildId,
  id,
) {
  return useHasEnhancedRoleColors.getHasEnhancedRoleColors(guildId, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = function useIsRoleStyleAndRoleColorsEligibleForERC(
  guildId,
  id,
  stateFromStores,
  processColorStringsArray,
) {
  let tmp = useHasEnhancedRoleColorsDefault(guildId, id);
  if (tmp) {
    tmp = "username" === stateFromStores;
  }
  if (tmp) {
    tmp = processColorStringsArray.length > 1;
  }
  return tmp;
};
