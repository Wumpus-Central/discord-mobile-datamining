// _runtime/metro/05496__slicedToArray.js
import { _arrayWithHoles } from "../05497__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05498__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05499__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05501__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};