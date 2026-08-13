// _runtime/metro/05669__slicedToArray.js
import { _arrayWithHoles } from "../05670__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05671__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05672__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05674__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};