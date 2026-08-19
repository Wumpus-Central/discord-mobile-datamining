// === Module 4427: ArraySpeciesCreate ===

// Module 4427 (ArraySpeciesCreate)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import _mod541 from "module_541" /* 541 */;
import isObject from "isObject" /* 4391 */;
import isInteger from "isInteger" /* 4428 */;
import getEvalledConstructor2 from "getEvalledConstructor" /* 4429 */;
import ArrayCreate from "ArrayCreate" /* 4431 */;
import Get from "Get" /* 4437 */;
import getEvalledConstructor3 from "getEvalledConstructor" /* 4439 */;

let closure_2 = getEvalledConstructor("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (getEvalledConstructor2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = isObject(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (getEvalledConstructor3(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new _mod541("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod541("Assertion failed: length must be an integer >= 0");
};