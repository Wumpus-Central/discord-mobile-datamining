// _runtime/04670_HasProperty.js
import { isObject } from "04611_isObject.js";

export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4658)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(541)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};