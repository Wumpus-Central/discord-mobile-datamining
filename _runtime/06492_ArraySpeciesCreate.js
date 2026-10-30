// === Module 6492: ArraySpeciesCreate ===

// Module 6492 (ArraySpeciesCreate)
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6493 from "module_6493" /* 6493 */;
import _mod6494 from "module_6494" /* 6494 */;
import ArrayCreate from "ArrayCreate" /* 6496 */;
import Get from "Get" /* 6502 */;
import _mod6504 from "module_6504" /* 6504 */;

let closure_2 = _mod1293("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6493(arg1)) {
    if (arg1 >= 0) {
      if (_mod6494(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6456(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6504(tmp6)) {
          const tmp62 = new tmp6(arg1);
          return tmp62;
        } else {
          const tmp11 = new _mod1294("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1294("Assertion failed: length must be an integer >= 0");
};