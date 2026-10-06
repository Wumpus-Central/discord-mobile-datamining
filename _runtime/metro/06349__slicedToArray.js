// _runtime/metro/06349__slicedToArray.js
import _arrayWithHoles from "../06350__arrayWithHoles.js";
import _iterableToArrayLimit from "../06351__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../06352__unsupportedIterableToArray.js";
import _nonIterableRest from "../06354__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  const tmp3 =
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest();
  return tmp3;
}
