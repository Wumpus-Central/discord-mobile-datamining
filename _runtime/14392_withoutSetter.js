// _runtime/14392_withoutSetter.js
import _mod14378 from "metro/14378__.js";
import _mod14393 from "metro/14393__.js";
import _mod14397 from "metro/14397__.js";
import _mod14400 from "metro/14400__.js";
import _mod14401 from "metro/14401__.js";
import prop from "metro/14396__.js";

let closure_2 = _mod14393("wks");
let _Symbol = _mod14378.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14378.Symbol;
  const tmp2 = _Symbol.for || _mod14378.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14378.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14400;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14401(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14397) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14401;
    }
    _Symbol = _mod14378.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
