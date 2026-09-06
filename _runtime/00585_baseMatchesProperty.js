// === Module 585: baseMatchesProperty ===

// Module 585 (baseMatchesProperty)
import _mod590 from "module_590" /* 590 */;
import _mod629 from "module_629" /* 629 */;
import baseIsEqual from "baseIsEqual" /* 632 */;


export default function baseMatchesProperty(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (require("module_586")(arg0)) {
    if (tmp(587)(arg1)) {
      let fn = tmp(588)(tmp(589)(arg0), arg1);
      const tmpResult = tmp(588);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = _mod590(arg0, closure_0);
    if (undefined === tmp4) {
      if (tmp4 === closure_1) {
        let tmp6 = _mod629(arg0, closure_0);
      }
      return tmp6;
    }
    tmp6 = baseIsEqual(closure_1, tmp4, 3);
  };
};