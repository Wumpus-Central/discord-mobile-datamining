// _runtime/06427_ArraySpeciesCreate.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";
import _mod6391 from "metro/06391__.js";
import _mod6428 from "metro/06428__.js";
import _mod6429 from "metro/06429__.js";
import ArrayCreate from "06431_ArrayCreate.js";
import Get from "06437_Get.js";
import _mod6439 from "metro/06439__.js";

let closure_2 = _mod1304("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6428(arg1)) {
    if (arg1 >= 0) {
      if (_mod6429(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6391(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6439(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1305("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1305("Assertion failed: length must be an integer >= 0");
}
