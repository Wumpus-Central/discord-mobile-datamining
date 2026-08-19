// === Module 4452: CreateDataPropertyOrThrow ===

// Module 4452 (CreateDataPropertyOrThrow)
import _mod541 from "module_541" /* 541 */;
import isObject from "isObject" /* 4391 */;
import isPropertyKey from "isPropertyKey" /* 4438 */;
import CreateDataProperty from "CreateDataProperty" /* 4453 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (!CreateDataProperty(arg0, arg1, arg2)) {
        const tmp15 = new _mod541("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new _mod541("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod541("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};