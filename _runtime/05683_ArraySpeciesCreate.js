// _runtime/05683_ArraySpeciesCreate.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";
import _mod5647 from "metro/05647__.js";
import _mod5684 from "metro/05684__.js";
import _mod5685 from "metro/05685__.js";
import ArrayCreate from "05687_ArrayCreate.js";
import Get from "05693_Get.js";
import _mod5695 from "metro/05695__.js";

let closure_2 = _mod1304("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5684(arg1)) {
    if (arg1 >= 0) {
      if (_mod5685(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5647(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5695(tmp6)) {
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
