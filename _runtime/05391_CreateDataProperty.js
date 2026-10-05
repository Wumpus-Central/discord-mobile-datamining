// _runtime/05391_CreateDataProperty.js
import _mod1293 from "metro/01293__.js";
import isObject from "05329_isObject.js";
import isPropertyKey from "05376_isPropertyKey.js";
import OrdinaryDefineOwnProperty from "05392_OrdinaryDefineOwnProperty.js";

export default function CreateDataProperty(arg0, arg1, __Value__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": __Value__, "[[Writable]]": true };
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
}
