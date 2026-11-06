// _runtime/16397_withoutSetter.js
import _mod16383 from "metro/16383__.js";
import _mod16398 from "metro/16398__.js";
import _mod16402 from "metro/16402__.js";
import _mod16405 from "metro/16405__.js";
import _mod16406 from "metro/16406__.js";
import prop from "metro/16401__.js";

let closure_2 = _mod16398("wks");
let _Symbol = _mod16383.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16383.Symbol;
  const tmp2 = _Symbol.for || _mod16383.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16383.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16405;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16406(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16402) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16406;
    }
    _Symbol = _mod16383.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
