// discord_app/modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import useHasEnhancedRoleColors from "../../powerups/hooks/useHasEnhancedRoleColors.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useHasEnhancedRoleColorsDefault = useHasEnhancedRoleColors;

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
    if (ThemeStore.theme === ThemeTypes.LIGHT) {
      let tmp10;
      let tmp12Result;
      if (null != primaryColor) {
        const obj = _modDef683(primaryColor);
        tmp10 = processColor;
        [tmp7, tmp8, tmp9] = obj.hsl();
        _slicedToArray(obj.hsl(), 3);
        const obj2 = _modDef683;
        const hslResult = obj2.hsl(tmp7, tmp8, 0.85 * tmp9);
        tmp12Result = processColor(hslResult.hex());
      }
      const obj3 = { primaryColor: tmp12Result, secondaryColor: null, tertiaryColor: null };
      const secondaryColor = colorStrings.secondaryColor;
      if (ThemeStore.theme === ThemeTypes.LIGHT) {
        let tmp10Result;
        if (null != secondaryColor) {
          const obj5 = _modDef683(secondaryColor);
          [tmp17, tmp18, tmp19] = obj5.hsl();
          _slicedToArray(obj5.hsl(), 3);
          const obj6 = _modDef683;
          const hslResult1 = obj6.hsl(tmp17, tmp18, 0.85 * tmp19);
          tmp10Result = tmp10(hslResult1.hex());
        }
        obj3.secondaryColor = tmp10Result;
        const tertiaryColor = colorStrings.tertiaryColor;
        if (ThemeStore.theme === ThemeTypes.LIGHT) {
          let tmp10Result2;
          if (null != tertiaryColor) {
            const obj8 = _modDef683(tertiaryColor);
            [tmp25, tmp26, tmp27] = obj8.hsl();
            _slicedToArray(obj8.hsl(), 3);
            const obj9 = _modDef683;
            const hslResult2 = obj9.hsl(tmp25, tmp26, 0.85 * tmp27);
            tmp10Result2 = tmp10(hslResult2.hex());
          }
          obj3.tertiaryColor = tmp10Result2;
          return obj3;
        }
        tmp10Result2 = tmp10(tertiaryColor);
      }
      tmp10Result = tmp10(secondaryColor);
    }
    tmp12Result = processColor(primaryColor);
    tmp10 = processColor;
  }
}
const processColor = react_native.processColor;
const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx");

export { processColorStrings };
export const processColorStringsArray = function processColorStringsArray(colorStrings) {
  if (null == colorStrings) {
    return [];
  } else {
    const items = [, ,];
    ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(colorStrings));
    processColorStrings(colorStrings);
    return items.filter(GlobalUtils.isNotNullish);
  }
};
export const useProcessColorStringsArray = function useProcessColorStringsArray(colorStrings) {
  let closure_0 = colorStrings;
  let primaryColor;
  const useMemo = react.useMemo;
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
  return useMemo(() => {
    let items;
    if (null == colorStrings) {
      items = [];
    } else {
      const items1 = [, ,];
      ({ primaryColor: arr[0], secondaryColor: arr[1], tertiaryColor: arr[2] } = processColorStrings(tmp));
      processColorStrings(tmp);
      items = items1.filter(GlobalUtils.isNotNullish);
    }
    return items;
  }, items);
};
export const isNativeMessageEligibleForEnhancedRoleColors = function isNativeMessageEligibleForEnhancedRoleColors(
  guildId1,
  id,
) {
  const obj = useHasEnhancedRoleColors;
  return obj.getHasEnhancedRoleColors(guildId1, id);
};
export const useIsRoleStyleAndRoleColorsEligibleForERC = (guildId, id, stateFromStores, processColorStringsArray) => {
  const tmp =
    useHasEnhancedRoleColorsDefault(guildId, id) &&
    "username" === stateFromStores &&
    processColorStringsArray.length > 1;
  return tmp;
};
