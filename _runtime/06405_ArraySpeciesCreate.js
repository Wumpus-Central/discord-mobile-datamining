// === Module 6405: ArraySpeciesCreate ===

// Module 6405 (ArraySpeciesCreate)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod6369 from "module_6369" /* 6369 */;
import _mod6406 from "module_6406" /* 6406 */;
import _mod6407 from "module_6407" /* 6407 */;
import ArrayCreate from "ArrayCreate" /* 6409 */;
import Get from "Get" /* 6415 */;
import _mod6417 from "module_6417" /* 6417 */;

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6406(arg1)) {
    if (arg1 >= 0) {
      if (_mod6407(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6369(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6417(tmp6)) {
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