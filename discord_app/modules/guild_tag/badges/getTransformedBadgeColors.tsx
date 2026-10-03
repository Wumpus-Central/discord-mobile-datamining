// === Module 13729: getTransformedBadgeColors ===

// Module 13729 (getTransformedBadgeColors)
import _modDef683 from "module_683" /* 683 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export const getTransformedBadgeColors = function getTransformedBadgeColors(arg0) {
  ({ primaryTintColor, primaryTintLuminances, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights } = arg0);
  if (null == primaryTintColor) {
    let items = [];
    if (tmp6) {
      if (null == secondaryTintColor) {
        items = secondaryBaseColors;
      } else {
        let map2 = dependencyMap;
        if (obj2.valid(secondaryTintColor)) {
          secondaryTintColor = _modDef683(secondaryTintColor);
          primaryTintColor = secondaryTintColor;
          closure_2 = secondaryTintColor.luminance();
          map2 = secondaryTintLuminances.map;
          let map2Result = map2((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
        } else {
          map2Result = secondaryTintLuminances.map(() => "#000000");
        }
        obj2 = _modDef683;
      }
    }
    const obj3 = { primaryColorsTransformed: tmp, secondaryColorsTransformed: items };
    return obj3;
  } else {
    secondaryLuminanceWeights = tmp2;
    let map = dependencyMap;
    if (obj.valid(primaryTintColor)) {
      primaryTintColor = _modDef683(primaryTintColor);
      closure_2 = primaryTintColor.luminance();
      map = primaryTintLuminances.map;
      let mapped = map((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
    } else {
      mapped = primaryTintLuminances.map(() => "#000000");
    }
    obj = _modDef683;
  }
};