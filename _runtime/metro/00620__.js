// _runtime/metro/00620__.js
import _process from "../00621__process.js";
import baseUnary from "../00622_baseUnary.js";
import baseIsTypedArray from "../00623_baseIsTypedArray.js";

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;
