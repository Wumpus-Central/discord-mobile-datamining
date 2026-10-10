// _runtime/05687_ArraySpeciesCreate.js
import _mod1305 from "metro/01305__.js";
import _mod1306 from "metro/01306__.js";
import _mod5651 from "metro/05651__.js";
import _mod5688 from "metro/05688__.js";
import _mod5689 from "metro/05689__.js";
import ArrayCreate from "05691_ArrayCreate.js";
import Get from "05697_Get.js";
import _mod5699 from "metro/05699__.js";

let closure_2 = _mod1305("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5688(arg1)) {
    if (arg1 >= 0) {
      if (_mod5689(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5651(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5699(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1306("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1306("Assertion failed: length must be an integer >= 0");
}
