// _runtime/05007_ArraySpeciesCreate.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod4971 from "metro/04971__.js";
import _mod5008 from "metro/05008__.js";
import _mod5009 from "metro/05009__.js";
import ArrayCreate from "05011_ArrayCreate.js";
import Get from "05017_Get.js";
import _mod5019 from "metro/05019__.js";

let closure_2 = _mod1281("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5008(arg1)) {
    if (arg1 >= 0) {
      if (_mod5009(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4971(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5019(tmp6)) {
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
