// === Module 538: ? ===

// Module 538
import _process from "_process" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsTypedArray from "baseIsTypedArray" /* 541 */;

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;