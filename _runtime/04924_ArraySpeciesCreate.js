// _runtime/04924_ArraySpeciesCreate.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod4888 from "metro/04888__.js";
import _mod4925 from "metro/04925__.js";
import _mod4926 from "metro/04926__.js";
import ArrayCreate from "04928_ArrayCreate.js";
import Get from "04934_Get.js";
import _mod4936 from "metro/04936__.js";

let closure_2 = _mod1281("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4925(arg1)) {
    if (arg1 >= 0) {
      if (_mod4926(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4888(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod4936(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1282("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1282("Assertion failed: length must be an integer >= 0");
}
