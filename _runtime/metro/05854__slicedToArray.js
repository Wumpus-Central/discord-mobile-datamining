// _runtime/metro/05854__slicedToArray.js
import _arrayWithHoles from "../05855__arrayWithHoles.js";
import _iterableToArrayLimit from "../05856__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../05857__unsupportedIterableToArray.js";
import _nonIterableRest from "../05859__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return (
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest()
  );
}
