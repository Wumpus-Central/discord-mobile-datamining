// _runtime/04845_ArraySpeciesCreate.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import _mod4809 from "metro/04809__.js";
import _mod4846 from "metro/04846__.js";
import _mod4847 from "metro/04847__.js";
import ArrayCreate from "04849_ArrayCreate.js";
import Get from "04855_Get.js";
import _mod4857 from "metro/04857__.js";

let closure_2 = _mod1282("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4846(arg1)) {
    if (arg1 >= 0) {
      if (_mod4847(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4809(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod4857(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new _mod1283("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1283("Assertion failed: length must be an integer >= 0");
}
