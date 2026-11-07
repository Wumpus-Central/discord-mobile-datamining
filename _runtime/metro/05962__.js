// === Module 5962: ? ===

// Module 5962
import _process from "_process" /* 539 */;
import baseUnary from "baseUnary" /* 540 */;
import baseIsMap from "baseIsMap" /* 5963 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;