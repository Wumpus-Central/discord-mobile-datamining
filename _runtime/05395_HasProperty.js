// _runtime/05395_HasProperty.js
import _mod1293 from "metro/01293__.js";
import isObject from "05336_isObject.js";
import isPropertyKey from "05383_isPropertyKey.js";

export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      return arg1 in arg0;
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: `P` must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: `O` must be an Object");
    throw tmp3;
  }
}
