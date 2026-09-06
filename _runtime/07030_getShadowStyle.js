// === Module 7030: getShadowStyle ===

// Module 7030 (getShadowStyle)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;

export const getShadowStyle = function getShadowStyle(color) {
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
};