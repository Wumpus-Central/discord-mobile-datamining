// _runtime/metro/06857__slicedToArray.js
import _arrayWithHoles from "../06858__arrayWithHoles.js";
import _iterableToArrayLimit from "../06859__iterableToArrayLimit.js";
import _unsupportedIterableToArray from "../06860__unsupportedIterableToArray.js";
import _nonIterableRest from "../06862__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return (
    _arrayWithHoles(arg0) ||
    _iterableToArrayLimit(arg0, arg1) ||
    _unsupportedIterableToArray(arg0, arg1) ||
    _nonIterableRest()
  );
}
