// === Module 4474: ArraySpeciesCreate ===

// Module 4474 (ArraySpeciesCreate)
let closure_2 = require("getEvalledConstructor")("%Symbol.species%", true);

export default function ArraySpeciesCreate(arg0, arg1) {
  if (require(4475) /* isInteger */(arg1)) {
    if (arg1 >= 0) {
      if (tmp(4476)(arg0)) {
        const tmp3 = tmp(4484)(arg0, "constructor");
        let tmp5 = closure_2;
        if (closure_2) {
          tmp5 = tmp(4438)(tmp3);
        }
        let tmp6 = tmp3;
        if (tmp5) {
          const tmp7 = tmp(4484)(tmp3, tmp4);
          tmp5 = null === tmp7;
          tmp6 = tmp7;
        }
        if (undefined === tmp6) {
          return tmp(4478)(arg1);
        } else if (tmp(4486)(tmp6)) {
          tmp6 = new tmp6(arg1);
          return tmp6;
        } else {
          const tmp11 = new tmp(541)("C must be a constructor");
          throw tmp11;
        }
        tmp4 = closure_2;
      } else {
        return tmp(4478)(arg1);
      }
    }
  }
  throw new require(541)("Assertion failed: length must be an integer >= 0");
};