// _runtime/metro/05511__slicedToArray.js
import { _arrayWithHoles } from "../05512__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../05513__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../05514__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../05516__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles /* _arrayWithHoles */(arg0) || _iterableToArrayLimit /* _iterableToArrayLimit */(arg0, arg1) || _unsupportedIterableToArray /* _unsupportedIterableToArray */(arg0, arg1) || _nonIterableRest /* _nonIterableRest */();
};