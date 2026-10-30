// === Module 7193: ? ===

// Module 7193
import _mod17 from "module_17" /* 17 */;

const Platform = _mod17.Platform;

export function getShadowStyle(color) {
  let shadowColor = color.color;
  ({ offset, radius, opacity } = color);
  if (shadowColor === undefined) {
    shadowColor = "#000";
  }
  return { shadowOffset, shadowRadius, shadowColor, shadowOpacity };
}