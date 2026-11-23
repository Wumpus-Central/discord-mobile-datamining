// _runtime/15552_withoutSetter.js
import _mod15538 from "metro/15538__.js";
import _mod15553 from "metro/15553__.js";
import _mod15557 from "metro/15557__.js";
import sum from "15560_sum.js";
import _mod15561 from "metro/15561__.js";
import prop from "metro/15556__.js";

let closure_2 = _mod15553("wks");
let _Symbol = _mod15538.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15538.Symbol;
  const tmp2 = _Symbol.for || _mod15538.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15538.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15561(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15557) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15561;
    }
    _Symbol = _mod15538.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
