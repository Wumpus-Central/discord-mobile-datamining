// _runtime/00596_baseMatchesProperty.js
import _mod601 from "metro/00601__.js";
import _mod640 from "metro/00640__.js";
import baseIsEqual from "00643_baseIsEqual.js";

const require = globalThis.__r;

export default function baseMatchesProperty(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (require("metro/00597__.js")(arg0)) {
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
}
