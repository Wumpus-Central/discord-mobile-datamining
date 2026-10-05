// _runtime/metro/06342__slicedToArray.js
import _arrayWithHoles from "../06343__arrayWithHoles.js";
import _iterableToArrayLimit from "../06344__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../06345__unsupportedIterableToArray.js";
import _nonIterableRest from "../06347__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  const tmp3 =
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest();
  return tmp3;
}
