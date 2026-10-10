// === Module 5179: ? ===

// Module 5179
import _process from "_process" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 5180 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;