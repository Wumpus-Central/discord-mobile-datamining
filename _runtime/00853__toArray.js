import { _arrayWithHoles } from "00033__arrayWithHoles.js";
import { _unsupportedIterableToArray } from "00035__unsupportedIterableToArray.js";
import { _nonIterableRest } from "00037__nonIterableRest.js";
import { _iterableToArray } from "00854__iterableToArray.js";
// _runtime/00853__toArray.js

export default function _toArray(arg0) {
  return _arrayWithHoles /* _arrayWithHoles */(arg0) || _iterableToArray /* _iterableToArray */(arg0) || _unsupportedIterableToArray /* _unsupportedIterableToArray */(arg0) || _nonIterableRest /* _nonIterableRest */();
};