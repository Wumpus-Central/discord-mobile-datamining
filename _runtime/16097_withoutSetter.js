// _runtime/16097_withoutSetter.js
import _mod16083 from "metro/16083__.js";
import _mod16098 from "metro/16098__.js";
import _mod16102 from "metro/16102__.js";
import _mod16105 from "metro/16105__.js";
import _mod16106 from "metro/16106__.js";
import prop from "metro/16101__.js";

let closure_2 = _mod16098("wks");
let _Symbol = _mod16083.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16083.Symbol;
  const tmp2 = _Symbol.for || _mod16083.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16083.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16105;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16106(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16102) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16106;
    }
    _Symbol = _mod16083.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
