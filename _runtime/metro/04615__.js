// _runtime/metro/04615__.js
import _process from "../00624__process.js";
import baseUnary from "../00625_baseUnary.js";
import baseIsSet from "../04616_baseIsSet.js";

const tmp = _process && _process.isSet;
if (tmp) {
  let _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;