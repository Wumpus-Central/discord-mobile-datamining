// _runtime/metro/07182__.js
import _mod7183 from "07183__.js";

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
