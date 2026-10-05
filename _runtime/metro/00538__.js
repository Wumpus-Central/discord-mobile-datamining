// === Module 538: ? ===

// Module 538
import _mod539 from "module_539" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsTypedArray from "baseIsTypedArray" /* 541 */;

let _module;
const tmp = _mod539 && _mod539.isTypedArray;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;