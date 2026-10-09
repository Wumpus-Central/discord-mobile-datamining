// _runtime/05684_ArraySpeciesCreate.js
import _mod1305 from "metro/01305__.js";
import _mod1306 from "metro/01306__.js";
import _mod5648 from "metro/05648__.js";
import _mod5685 from "metro/05685__.js";
import _mod5686 from "metro/05686__.js";
import ArrayCreate from "05688_ArrayCreate.js";
import Get from "05694_Get.js";
import _mod5696 from "metro/05696__.js";

let closure_2 = _mod1305("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5685(arg1)) {
    if (arg1 >= 0) {
      if (_mod5686(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5648(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5696(tmp6)) {
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
