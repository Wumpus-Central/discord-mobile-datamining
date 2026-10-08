// _runtime/metro/06698__.js
import _mod6699 from "06699__.js";

require = arg1;
const dependencyMap = arg6;

export const getDistanceForDirection = function getDistanceForDirection(layout, gestureDirection, arg2) {
  const invertedMultiplier = _mod6699.getInvertedMultiplier(gestureDirection, arg2);
  if ("vertical" !== gestureDirection) {
    if ("vertical-inverted" !== gestureDirection) {
      return layout.width * invertedMultiplier;
    }
  }
  return layout.height * invertedMultiplier;
};
