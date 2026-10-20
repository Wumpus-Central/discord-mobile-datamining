// === Module 6383: ArraySpeciesCreate ===

// Module 6383 (ArraySpeciesCreate)
import _mod1307 from "module_1307" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod6347 from "module_6347" /* 6347 */;
import _mod6384 from "module_6384" /* 6384 */;
import _mod6385 from "module_6385" /* 6385 */;
import ArrayCreate from "ArrayCreate" /* 6387 */;
import Get from "Get" /* 6393 */;
import _mod6395 from "module_6395" /* 6395 */;

let closure_2 = _mod1307("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod6384(arg1)) {
    if (arg1 >= 0) {
      if (_mod6385(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod6347(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod6395(tmp6)) {
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