// _runtime/14093_withoutSetter.js
import _mod14079 from "metro/14079__.js";
import _mod14094 from "metro/14094__.js";
import _mod14098 from "metro/14098__.js";
import _mod14101 from "metro/14101__.js";
import _mod14102 from "metro/14102__.js";
import prop from "metro/14097__.js";

let closure_2 = _mod14094("wks");
let _Symbol = _mod14079.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14079.Symbol;
  const tmp2 = _Symbol.for || _mod14079.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14079.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14101;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14102(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14098) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14102;
    }
    _Symbol = _mod14079.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
