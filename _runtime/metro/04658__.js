// _runtime/metro/04658__.js
import _process from "../00539__process.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsMap from "../04659_baseIsMap.js";

const tmp = _process && _process.isMap;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
