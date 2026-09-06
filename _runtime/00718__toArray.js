// _runtime/00718__toArray.js
import _arrayWithHoles from "00033__arrayWithHoles.js";
import _unsupportedIterableToArray from "00035__unsupportedIterableToArray.js";
import _nonIterableRest from "00037__nonIterableRest.js";
import _iterableToArray from "00719__iterableToArray.js";

export default function _toArray(current) {
  return (
    _arrayWithHoles(current) || _iterableToArray(current) || _unsupportedIterableToArray(current) || _nonIterableRest()
  );
}
