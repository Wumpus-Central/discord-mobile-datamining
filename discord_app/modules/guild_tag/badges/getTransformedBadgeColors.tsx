// === Module 13918: getTransformedBadgeColors ===

// Module 13918 (getTransformedBadgeColors)
import _modDef672 from "module_672" /* 672 */;
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
          secondaryTintColor = _modDef672(secondaryTintColor);
          primaryTintColor = secondaryTintColor;
          closure_2 = secondaryTintColor.luminance();
          map2 = secondaryTintLuminances.map;
          let map2Result = map2((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
        } else {
          map2Result = secondaryTintLuminances.map(() => "#000000");
        }
        obj2 = _modDef672;
      }
    }
    let obj = { primaryColorsTransformed: tmp, secondaryColorsTransformed: items };
    return obj;
  } else {
    secondaryLuminanceWeights = tmp2;
    let map = dependencyMap;
    obj = _modDef672;
    if (obj.valid(primaryTintColor)) {
      primaryTintColor = _modDef672(primaryTintColor);
      closure_2 = primaryTintColor.luminance();
      map = primaryTintLuminances.map;
      let mapped = map((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
    } else {
      mapped = primaryTintLuminances.map(() => "#000000");
    }
  }
};