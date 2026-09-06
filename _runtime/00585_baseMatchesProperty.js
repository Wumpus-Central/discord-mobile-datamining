// _runtime/00585_baseMatchesProperty.js
import _mod590 from "metro/00590__.js";
import _mod629 from "metro/00629__.js";
import baseIsEqual from "00632_baseIsEqual.js";

export default function baseMatchesProperty(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  if (require("metro/00586__.js")(arg0)) {
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
}
