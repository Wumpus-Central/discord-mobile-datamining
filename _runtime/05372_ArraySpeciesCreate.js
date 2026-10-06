// _runtime/05372_ArraySpeciesCreate.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1293 from "metro/01293__.js";
import isObject from "05336_isObject.js";
import isInteger from "05373_isInteger.js";
import GetIntrinsic2 from "05374_GetIntrinsic.js";
import ArrayCreate from "05376_ArrayCreate.js";
import Get from "05382_Get.js";
import IsConstructor from "05384_IsConstructor.js";

let closure_2 = GetIntrinsic("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (isInteger(arg1)) {
    if (arg1 >= 0) {
      if (GetIntrinsic2(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2 && isObject(tmp3);
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (IsConstructor(tmp6)) {
          const self3 = this;
          const self4 = this;
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const self = this;
          const self2 = this;
          const tmp9 = new _mod1293("C must be a constructor");
          throw tmp9;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  const tmp14 = new _mod1293("Assertion failed: length must be an integer >= 0");
  throw tmp14;
}
