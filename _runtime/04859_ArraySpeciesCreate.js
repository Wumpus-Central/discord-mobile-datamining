// _runtime/04859_ArraySpeciesCreate.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import _mod4823 from "metro/04823__.js";
import _mod4860 from "metro/04860__.js";
import _mod4861 from "metro/04861__.js";
import ArrayCreate from "04863_ArrayCreate.js";
import Get from "04869_Get.js";
import _mod4871 from "metro/04871__.js";

let closure_2 = _mod1282("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4860(arg1)) {
    if (arg1 >= 0) {
      if (_mod4861(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4823(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod4871(tmp6)) {
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
