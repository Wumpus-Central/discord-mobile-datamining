// === Module 4588: ? ===

// Module 4588
import _process from "_process" /* 624 */;
import baseUnary from "baseUnary" /* 625 */;
import baseIsMap from "baseIsMap" /* 4589 */;

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;