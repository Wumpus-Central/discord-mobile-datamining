// _runtime/00584_baseMatchesProperty.js
import _mod589 from "metro/00589__.js";
import _mod628 from "metro/00628__.js";
import baseIsEqual from "00631_baseIsEqual.js";

const require = globalThis.__r;

export default function baseMatchesProperty(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (require("metro/00585__.js")(arg0)) {
    if (tmp(586)(arg1)) {
      let fn = tmp(587)(tmp(588)(arg0), arg1);
      const tmpResult = tmp(587);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp4 = _mod589(arg0, closure_0);
    if (undefined === tmp4) {
      if (tmp4 === closure_1) {
        let tmp6 = _mod628(arg0, closure_0);
      }
      return tmp6;
    }
    tmp6 = baseIsEqual(closure_1, tmp4, 3);
  };
}
