// === Module 729: _toArray ===

// Module 729 (_toArray)
import _arrayWithHoles from "_arrayWithHoles" /* 33 */;
import _unsupportedIterableToArray from "_unsupportedIterableToArray" /* 35 */;
import _nonIterableRest from "_nonIterableRest" /* 37 */;
import _iterableToArray from "_iterableToArray" /* 730 */;


export default function _toArray(current) {
  return _arrayWithHoles(current) || _iterableToArray(current) || _unsupportedIterableToArray(current) || _nonIterableRest();
};