// _runtime/metro/05862__slicedToArray.js
import _arrayWithHoles from "../05863__arrayWithHoles.js";
import _iterableToArrayLimit from "../05864__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../05865__unsupportedIterableToArray.js";
import _nonIterableRest from "../05867__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return (
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest()
  );
}
