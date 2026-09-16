// === Module 14229: Shadows ===

// Module 14229 (Shadows)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/void/Shadows/native/Shadows.tsx");

export const generateBoxShadowStyle = (EIGHT_DP_ELEVATION_SHADOW_PARAMS) => {
  ({ xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid } = EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  if (obj.isAndroid()) {
    const obj2 = { elevation, shadowColor: shadowColorAndroid };
    let obj3 = obj2;
  } else {
    obj3 = { shadowColor: shadowColorIos, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
    const size = { width: xOffset, height: yOffset };
    obj3.shadowOffset = size;
    obj3.shadowOpacity = shadowOpacity;
    obj3.shadowRadius = shadowRadius;
  }
  return obj3;
};
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 4, shadowColorIos: "#000000", shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8, shadowColorAndroid: "#000000" };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 2, shadowColorIos: "#000000", shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, shadowColorAndroid: "#000000" };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 7, shadowColorIos: "#000", shadowOpacity: 0.36, shadowRadius: 9.51, elevation: 15, shadowColorAndroid: "#000" };
export const NO_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 0, shadowColorIos: "#000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000" };