// === Module 4620: ? ===

// Module 4620
import _process from "_process" /* 621 */;
import baseUnary from "baseUnary" /* 622 */;
import baseIsSet from "baseIsSet" /* 4621 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;