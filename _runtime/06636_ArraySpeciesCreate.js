// === Module 6636: ArraySpeciesCreate ===

// Module 6636 (ArraySpeciesCreate)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6637 from "module_6637" /* 6637 */;
import _mod6638 from "module_6638" /* 6638 */;
import ArrayCreate from "ArrayCreate" /* 6640 */;
import Get from "Get" /* 6646 */;
import _mod6648 from "module_6648" /* 6648 */;

let closure_2 = _mod1292("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6637(arg1)) {
    if (arg1 >= 0) {
      if (_mod6638(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6600(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6648(tmp6)) {
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