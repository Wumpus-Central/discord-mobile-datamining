// === Module 596: baseMatchesProperty ===

// Module 596 (baseMatchesProperty)
import _mod601 from "module_601" /* 601 */;
import _mod640 from "module_640" /* 640 */;
import baseIsEqual from "baseIsEqual" /* 643 */;

const require = globalThis.__r;


export default function baseMatchesProperty(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (require("module_597")(arg0)) {
    if (tmp(598)(arg1)) {
      let fn = tmp(599)(tmp(600)(arg0), arg1);
      const tmpResult = tmp(599);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = _mod601(arg0, closure_0);
    if (undefined === tmp4) {
      if (tmp4 === closure_1) {
        let tmp6 = _mod640(arg0, closure_0);
      }
      return tmp6;
    }
    tmp6 = baseIsEqual(closure_1, tmp4, 3);
  };
};