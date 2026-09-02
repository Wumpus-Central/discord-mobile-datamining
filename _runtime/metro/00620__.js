// === Module 620: ? ===

// Module 620
import _process from "_process" /* 621 */;
import baseUnary from "baseUnary" /* 622 */;
import baseIsTypedArray from "baseIsTypedArray" /* 623 */;

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;