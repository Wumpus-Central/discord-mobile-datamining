// === Module 623: ? ===

// Module 623
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsTypedArray from "baseIsTypedArray" /* 626 */;

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;