// _runtime/metro/07041__slicedToArray.js
import { _arrayWithHoles } from "../07042__arrayWithHoles.js";
import { _iterableToArrayLimit } from "../07043__iterableToArrayLimit.js";
import { _unsupportedIterableToArray } from "../07044__unsupportedIterableToArray.js";
import { _nonIterableRest } from "../07046__nonIterableRest.js";

export default function _slicedToArray(arg0, arg1) {
  return _arrayWithHoles(arg0) || _iterableToArrayLimit(arg0, arg1) || _unsupportedIterableToArray(arg0, arg1) || _nonIterableRest();
};