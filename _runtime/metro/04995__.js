// _runtime/metro/04995__.js
import _mod539 from "00539__.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsMap from "../04996_baseIsMap.js";

let _module;
const tmp = _mod539 && _mod539.isMap;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsMap;
}

export default _module;
