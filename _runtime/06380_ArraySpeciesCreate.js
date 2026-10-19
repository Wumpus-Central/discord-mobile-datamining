// === Module 6380: ArraySpeciesCreate ===

// Module 6380 (ArraySpeciesCreate)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6381 from "module_6381" /* 6381 */;
import _mod6382 from "module_6382" /* 6382 */;
import ArrayCreate from "ArrayCreate" /* 6384 */;
import Get from "Get" /* 6390 */;
import _mod6392 from "module_6392" /* 6392 */;

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6381(arg1)) {
    if (arg1 >= 0) {
      if (_mod6382(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6344(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6392(tmp6)) {
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