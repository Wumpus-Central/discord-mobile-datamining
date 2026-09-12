// _runtime/14399_withoutSetter.js
import _mod14385 from "metro/14385__.js";
import _mod14400 from "metro/14400__.js";
import _mod14404 from "metro/14404__.js";
import _mod14407 from "metro/14407__.js";
import _mod14408 from "metro/14408__.js";
import prop from "metro/14403__.js";

let closure_2 = _mod14400("wks");
let _Symbol = _mod14385.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14385.Symbol;
  const tmp2 = _Symbol.for || _mod14385.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14385.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14407;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14408(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14404) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14408;
    }
    _Symbol = _mod14385.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
