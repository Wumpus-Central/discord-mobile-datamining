// _runtime/16761_withoutSetter.js
import _mod16747 from "metro/16747__.js";
import _mod16762 from "metro/16762__.js";
import _mod16766 from "metro/16766__.js";
import _mod16769 from "metro/16769__.js";
import _mod16770 from "metro/16770__.js";
import prop from "metro/16765__.js";

let closure_2 = _mod16762("wks");
let _Symbol = _mod16747.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16747.Symbol;
  const tmp2 = _Symbol.for || _mod16747.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16747.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16769;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16770(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16766) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16770;
    }
    _Symbol = _mod16747.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
