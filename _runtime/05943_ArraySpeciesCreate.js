// === Module 5943: ArraySpeciesCreate ===

// Module 5943 (ArraySpeciesCreate)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod5907 from "module_5907" /* 5907 */;
import _mod5944 from "module_5944" /* 5944 */;
import _mod5945 from "module_5945" /* 5945 */;
import ArrayCreate from "ArrayCreate" /* 5947 */;
import Get from "Get" /* 5953 */;
import _mod5955 from "module_5955" /* 5955 */;

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5944(arg1)) {
    if (arg1 >= 0) {
      if (_mod5945(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5907(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5955(tmp6)) {
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
};