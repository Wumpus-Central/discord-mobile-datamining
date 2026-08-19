// _runtime/04427_ArraySpeciesCreate.js
import getEvalledConstructor from "00540_getEvalledConstructor.js";
import _mod541 from "metro/00541__.js";
import isObject from "04391_isObject.js";
import isInteger from "04428_isInteger.js";
import getEvalledConstructor2 from "04429_getEvalledConstructor.js";
import ArrayCreate from "04431_ArrayCreate.js";
import Get from "04437_Get.js";
import getEvalledConstructor3 from "04439_getEvalledConstructor.js";

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