// _runtime/06426_ArraySpeciesCreate.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";
import _mod6390 from "metro/06390__.js";
import _mod6427 from "metro/06427__.js";
import _mod6428 from "metro/06428__.js";
import ArrayCreate from "06430_ArrayCreate.js";
import Get from "06436_Get.js";
import _mod6438 from "metro/06438__.js";

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6427(arg1)) {
    if (arg1 >= 0) {
      if (_mod6428(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6390(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6438(tmp6)) {
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
