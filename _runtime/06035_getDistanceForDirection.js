// === Module 6035: getDistanceForDirection ===

// Module 6035 (getDistanceForDirection)
import getInvertedMultiplier from "getInvertedMultiplier" /* 6036 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDistanceForDirection = function getDistanceForDirection(width, gestureDirection, arg2) {
  const invertedMultiplier = getInvertedMultiplier.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return width.width * invertedMultiplier;
    }
  }
  return width.height * invertedMultiplier;
};