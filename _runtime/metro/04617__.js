// === Module 4617: ? ===

// Module 4617
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsMap from "baseIsMap" /* 4618 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;