// _runtime/metro/04587__.js
import _process from "../00624__process.js";
import baseUnary from "../00625_baseUnary.js";
import baseIsMap from "../04588_baseIsMap.js";

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;