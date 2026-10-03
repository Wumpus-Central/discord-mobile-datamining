// === Module 5365: ArraySpeciesCreate ===

// Module 5365 (ArraySpeciesCreate)
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5366 from "module_5366" /* 5366 */;
import _mod5367 from "module_5367" /* 5367 */;
import ArrayCreate from "ArrayCreate" /* 5369 */;
import Get from "Get" /* 5375 */;
import _mod5377 from "module_5377" /* 5377 */;

let closure_2 = _mod1292("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod5366(arg1)) {
    if (arg1 >= 0) {
      if (_mod5367(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod5329(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod5377(tmp6)) {
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