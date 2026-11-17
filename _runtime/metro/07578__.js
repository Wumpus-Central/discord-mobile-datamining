// === Module 7578: ? ===

// Module 7578
import _mod7579 from "module_7579" /* 7579 */;

require = arg1;
const dependencyMap = arg6;

export function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod7579.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
}