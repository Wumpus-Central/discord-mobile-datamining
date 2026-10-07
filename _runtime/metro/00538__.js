// _runtime/metro/00538__.js
import _process from "../00539__process.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsTypedArray from "../00541_baseIsTypedArray.js";

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;
