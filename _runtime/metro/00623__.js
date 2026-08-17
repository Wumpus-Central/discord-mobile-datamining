// _runtime/metro/00623__.js
import _process from "../00624__process.js";
import baseUnary from "../00625_baseUnary.js";
import baseIsTypedArray from "../00626_baseIsTypedArray.js";

const tmp = _process && _process.isTypedArray;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsTypedArray;
}

export default _module;