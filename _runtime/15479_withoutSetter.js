// _runtime/15479_withoutSetter.js
import _mod15465 from "metro/15465__.js";
import _mod15480 from "metro/15480__.js";
import _mod15484 from "metro/15484__.js";
import sum from "15487_sum.js";
import _mod15488 from "metro/15488__.js";
import prop from "metro/15483__.js";

let closure_2 = _mod15480("wks");
let _Symbol = _mod15465.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15465.Symbol;
  const tmp2 = _Symbol.for || _mod15465.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15465.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15488(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15484) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15488;
    }
    _Symbol = _mod15465.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
