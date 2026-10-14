// === Module 5692: ArraySpeciesCreate ===

// Module 5692 (ArraySpeciesCreate)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod5656 from "module_5656" /* 5656 */;
import _mod5693 from "module_5693" /* 5693 */;
import _mod5694 from "module_5694" /* 5694 */;
import ArrayCreate from "ArrayCreate" /* 5696 */;
import Get from "Get" /* 5702 */;
import _mod5704 from "module_5704" /* 5704 */;

let closure_2 = _mod1305("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5693(arg1)) {
    if (arg1 >= 0) {
      if (_mod5694(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5656(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5704(tmp6)) {
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
};