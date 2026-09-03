// _runtime/metro/05863__slicedToArray.js
import _arrayWithHoles from "../05864__arrayWithHoles.js";
import _iterableToArrayLimit from "../05865__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../05866__unsupportedIterableToArray.js";
import _nonIterableRest from "../05868__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return (
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest()
  );
}
