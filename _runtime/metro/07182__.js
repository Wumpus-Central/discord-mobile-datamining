// === Module 7182: ? ===

// Module 7182
import _mod7183 from "module_7183" /* 7183 */;

require = arg1;
const dependencyMap = arg6;

export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7183.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}