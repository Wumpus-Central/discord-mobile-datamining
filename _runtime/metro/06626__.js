// === Module 6626: ? ===

// Module 6626
import _mod6627 from "module_6627" /* 6627 */;

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod6627.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};