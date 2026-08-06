// _runtime/metro/05550__slicedToArray.js
import { _arrayWithHoles } from "../05551__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05552__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05553__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05555__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};