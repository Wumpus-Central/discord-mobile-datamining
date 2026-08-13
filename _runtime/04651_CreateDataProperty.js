// _runtime/04651_CreateDataProperty.js
import { isObject } from "04589_isObject.js";

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4636)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4652)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};