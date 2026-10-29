// === Module 6485: ArraySpeciesCreate ===

// Module 6485 (ArraySpeciesCreate)
import _mod1304 from "module_1304" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6486 from "module_6486" /* 6486 */;
import _mod6487 from "module_6487" /* 6487 */;
import ArrayCreate from "ArrayCreate" /* 6489 */;
import Get from "Get" /* 6495 */;
import _mod6497 from "module_6497" /* 6497 */;

let closure_2 = _mod1304("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6486(arg1)) {
    if (arg1 >= 0) {
      if (_mod6487(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6449(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6497(tmp6)) {
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
};