// _runtime/16387_withoutSetter.js
import _mod16373 from "metro/16373__.js";
import _mod16388 from "metro/16388__.js";
import _mod16392 from "metro/16392__.js";
import _mod16395 from "metro/16395__.js";
import _mod16396 from "metro/16396__.js";
import prop from "metro/16391__.js";

let closure_2 = _mod16388("wks");
let _Symbol = _mod16373.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16373.Symbol;
  const tmp2 = _Symbol.for || _mod16373.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16373.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16395;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16396(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16392) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16396;
    }
    _Symbol = _mod16373.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
