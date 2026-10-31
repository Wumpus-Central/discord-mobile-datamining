// === Module 6498: ArraySpeciesCreate ===

// Module 6498 (ArraySpeciesCreate)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6499 from "module_6499" /* 6499 */;
import _mod6500 from "module_6500" /* 6500 */;
import ArrayCreate from "ArrayCreate" /* 6502 */;
import Get from "Get" /* 6508 */;
import _mod6510 from "module_6510" /* 6510 */;

let closure_2 = _mod1292("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6499(arg1)) {
    if (arg1 >= 0) {
      if (_mod6500(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6462(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6510(tmp6)) {
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
};