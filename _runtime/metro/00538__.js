// _runtime/metro/00538__.js
import _mod539 from "00539__.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsTypedArray from "../00541_baseIsTypedArray.js";

let _module;
const tmp = _mod539 && _mod539.isTypedArray;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;
