// === Module 13139: getTransformedBadgeColors ===

// Module 13139 (getTransformedBadgeColors)
const result = require("set").fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export const getTransformedBadgeColors = function getTransformedBadgeColors(arg0) {
  let primaryTintColor;
  let primaryTintLuminances;
  let secondaryBaseColors;
  let secondaryLuminanceWeights;
  let secondaryTintColor;
  let secondaryTintLuminances;
  ({ primaryTintColor, primaryTintLuminances, secondaryBaseColors, secondaryTintColor, secondaryTintLuminances, secondaryLuminanceWeights } = arg0);
  if (null == primaryTintColor) {
    let items = [];
    if (tmp6) {
      if (null == secondaryTintColor) {
        items = secondaryBaseColors;
      } else {
        let map2 = primaryTintColor;
        if (obj2.valid(secondaryTintColor)) {
          secondaryTintColor = tmp7(map2[0])(secondaryTintColor);
          primaryTintColor = secondaryTintColor;
          let closure_2 = secondaryTintColor.luminance();
          map2 = secondaryTintLuminances.map;
          let map2Result = map2((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
        } else {
          map2Result = secondaryTintLuminances.map(() => "#000000");
        }
        obj2 = secondaryLuminanceWeights(primaryTintColor[0]);
        tmp7 = secondaryLuminanceWeights;
      }
    }
    let obj = { primaryColorsTransformed: null, secondaryColorsTransformed: null };
    obj[0] = tmp;
    obj[1] = items;
    return obj;
  } else {
    secondaryLuminanceWeights = tmp2;
    let map = primaryTintColor;
    obj = secondaryLuminanceWeights(primaryTintColor[0]);
    if (obj.valid(primaryTintColor)) {
      primaryTintColor = tmp3(map[0])(primaryTintColor);
      closure_2 = primaryTintColor.luminance();
      map = primaryTintLuminances.map;
      let mapped = map((arg0, arg1) => primaryTintColor.luminance((arg0 * secondaryLuminanceWeights[arg1].base + closure_2 * secondaryLuminanceWeights[arg1].tint) / (secondaryLuminanceWeights[arg1].base + secondaryLuminanceWeights[arg1].tint)).hex());
    } else {
      mapped = primaryTintLuminances.map(() => "#000000");
    }
    tmp3 = secondaryLuminanceWeights;
  }
};