// _runtime/04824_CreateDataProperty.js
import isObject from "04762_isObject.js";


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4809)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4825)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};