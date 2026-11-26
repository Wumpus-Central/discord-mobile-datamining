// _runtime/15746_withoutSetter.js
import _mod15732 from "metro/15732__.js";
import _mod15747 from "metro/15747__.js";
import _mod15751 from "metro/15751__.js";
import sum from "15754_sum.js";
import _mod15755 from "metro/15755__.js";
import prop from "metro/15750__.js";

let closure_2 = _mod15747("wks");
let _Symbol = _mod15732.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15732.Symbol;
  const tmp2 = _Symbol.for || _mod15732.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15732.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15755(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15751) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15755;
    }
    _Symbol = _mod15732.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
