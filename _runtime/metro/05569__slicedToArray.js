// _runtime/metro/05569__slicedToArray.js
import { _arrayWithHoles } from "../05570__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05571__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05572__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05574__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};