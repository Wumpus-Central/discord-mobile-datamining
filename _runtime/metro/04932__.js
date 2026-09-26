// === Module 4932: ? ===

// Module 4932
import _process from "_process" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsSet from "baseIsSet" /* 4933 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;