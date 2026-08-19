// === Module 6529: getDistanceForDirection ===

// Module 6529 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 6530 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = getInvertedMultiplier.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};