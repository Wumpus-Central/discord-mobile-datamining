// === Module 7251: ? ===

// Module 7251
import _mod7252 from "module_7252" /* 7252 */;

require = arg1;
const dependencyMap = arg6;

export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7252.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}