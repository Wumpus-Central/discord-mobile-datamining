// === Module 4890: ArraySpeciesCreate ===

// Module 4890 (ArraySpeciesCreate)
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4891 from "module_4891" /* 4891 */;
import _mod4892 from "module_4892" /* 4892 */;
import ArrayCreate from "ArrayCreate" /* 4894 */;
import Get from "Get" /* 4900 */;
import _mod4902 from "module_4902" /* 4902 */;

let closure_2 = _mod1282("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (_mod4891(arg1)) {
    if (arg1 >= 0) {
      if (_mod4892(arg0)) {
        const tmp3 = Get(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = _mod4854(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = Get(tmp3, closure_2);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return ArrayCreate(arg1);
        } else if (_mod4902(tmp6)) {
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