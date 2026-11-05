// === Module 7328: ? ===

// Module 7328
import _mod7329 from "module_7329" /* 7329 */;

require = arg1;
const dependencyMap = arg6;

export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7329.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}