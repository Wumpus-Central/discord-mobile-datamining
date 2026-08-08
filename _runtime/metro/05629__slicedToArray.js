// _runtime/metro/05629__slicedToArray.js
import { _arrayWithHoles } from "../05630__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05631__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05632__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05634__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};