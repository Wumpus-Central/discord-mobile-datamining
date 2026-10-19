// _runtime/06380_ArraySpeciesCreate.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";
import _mod6344 from "metro/06344__.js";
import _mod6381 from "metro/06381__.js";
import _mod6382 from "metro/06382__.js";
import ArrayCreate from "06384_ArrayCreate.js";
import Get from "06390_Get.js";
import _mod6392 from "metro/06392__.js";

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6381(arg1)) {
    if (arg1 >= 0) {
      if (_mod6382(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6344(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6392(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1308("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1308("Assertion failed: length must be an integer >= 0");
}
