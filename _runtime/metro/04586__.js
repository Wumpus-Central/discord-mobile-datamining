// === Module 4586: ? ===

// Module 4586
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsSet from "baseIsSet" /* 4587 */;

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;