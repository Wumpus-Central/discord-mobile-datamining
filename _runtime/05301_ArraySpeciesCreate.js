// === Module 5301: ArraySpeciesCreate ===

// Module 5301 (ArraySpeciesCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod5265 from "module_5265" /* 5265 */;
import _mod5302 from "module_5302" /* 5302 */;
import _mod5303 from "module_5303" /* 5303 */;
import ArrayCreate from "ArrayCreate" /* 5305 */;
import Get from "Get" /* 5311 */;
import _mod5313 from "module_5313" /* 5313 */;

let closure_2 = _mod1281("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5302(arg1)) {
    if (arg1 >= 0) {
      if (_mod5303(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5265(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5313(tmp6)) {
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
};