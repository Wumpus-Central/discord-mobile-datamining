// _runtime/metro/04987__.js
import _mod539 from "00539__.js";
import baseUnary from "../00540_baseUnary.js";
import baseIsSet from "../04988_baseIsSet.js";

let _module;
const tmp = _mod539 && _mod539.isSet;
if (tmp) {
  _module = baseUnary(tmp);
} else {
  _module = baseIsSet;
}

export default _module;
