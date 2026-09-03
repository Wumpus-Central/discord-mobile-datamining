// === Module 4822: HasProperty ===

// Module 4822 (HasProperty)
import isObject from "isObject" /* 4763 */;


export default function HasProperty(arg0, arg1) {
  if (isObject(arg0)) {
    if (tmp(4810)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(538)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};