// _runtime/05372_ArraySpeciesCreate.js
import _mod1292 from "metro/01292__.js";
import _mod1293 from "metro/01293__.js";
import _mod5336 from "metro/05336__.js";
import _mod5373 from "metro/05373__.js";
import _mod5374 from "metro/05374__.js";
import ArrayCreate from "05376_ArrayCreate.js";
import Get from "05382_Get.js";
import _mod5384 from "metro/05384__.js";

let closure_2 = _mod1292("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5373(arg1)) {
    if (arg1 >= 0) {
      if (_mod5374(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5336(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5384(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1293("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1293("Assertion failed: length must be an integer >= 0");
}
