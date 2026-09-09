// === Module 4859: ArraySpeciesCreate ===

// Module 4859 (ArraySpeciesCreate)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4860 from "module_4860" /* 4860 */;
import _mod4861 from "module_4861" /* 4861 */;
import ArrayCreate from "ArrayCreate" /* 4863 */;
import Get from "Get" /* 4869 */;
import _mod4871 from "module_4871" /* 4871 */;

let closure_2 = _mod1282("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4860(arg1)) {
    if (arg1 >= 0) {
      if (_mod4861(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4823(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod4871(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new _mod1283("C must be a constructor");
          throw tmp11;
        }
      } else {
        return ArrayCreate(arg1);
      }
    }
  }
  throw new _mod1283("Assertion failed: length must be an integer >= 0");
};