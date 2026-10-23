// _runtime/15534_withoutSetter.js
import _mod15520 from "metro/15520__.js";
import _mod15535 from "metro/15535__.js";
import _mod15539 from "metro/15539__.js";
import _mod15542 from "metro/15542__.js";
import _mod15543 from "metro/15543__.js";
import prop from "metro/15538__.js";

let closure_2 = _mod15535("wks");
let _Symbol = _mod15520.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15520.Symbol;
  const tmp2 = _Symbol.for || _mod15520.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15520.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15542;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15543(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15539) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15543;
    }
    _Symbol = _mod15520.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
