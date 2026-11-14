// _runtime/metro/06138__.js
import _process from "../00539__process.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsSet from "../06139_baseIsSet.js";

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
