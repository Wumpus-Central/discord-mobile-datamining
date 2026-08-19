// === Module 4453: CreateDataProperty ===

// Module 4453 (CreateDataProperty)
import _mod541 from "module_541" /* 541 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;
import OrdinaryDefineOwnProperty from "OrdinaryDefineOwnProperty" /* 4454 */;


export default function CreateDataProperty(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return OrdinaryDefineOwnProperty(arg0, arg1, obj);
    } else {
      const tmp10 = new _mod541("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};