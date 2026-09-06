// === Module 14124: Shadows ===

// Module 14124 (Shadows)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/void/Shadows/native/Shadows.tsx");

export const generateBoxShadowStyle = (EIGHT_DP_ELEVATION_SHADOW_PARAMS) => {
  ({ xOffset, yOffset, shadowColorIos, shadowOpacity, shadowRadius, elevation, shadowColorAndroid } = EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    obj = { elevation, shadowColor: shadowColorAndroid };
  } else {
    obj = { shadowColor: shadowColorIos, shadowOffset: null, shadowOpacity: null, shadowRadius: null };
    const size = { width: xOffset, height: yOffset };
    obj.shadowOffset = size;
    obj.shadowOpacity = shadowOpacity;
    obj.shadowRadius = shadowRadius;
  }
  return obj;
};
export const EIGHT_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 4, shadowColorIos: "#000000", shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8, shadowColorAndroid: "#000000" };
export const FOUR_DP_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 2, shadowColorIos: "#000000", shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4, shadowColorAndroid: "#000000" };
export const EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 7, shadowColorIos: "#000", shadowOpacity: 0.36, shadowRadius: 9.51, elevation: 15, shadowColorAndroid: "#000" };
export const NO_ELEVATION_SHADOW_PARAMS = { xOffset: 0, yOffset: 0, shadowColorIos: "#000", shadowOpacity: 0, shadowRadius: 0, elevation: 0, shadowColorAndroid: "#000" };