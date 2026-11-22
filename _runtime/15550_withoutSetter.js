// _runtime/15550_withoutSetter.js
import _mod15536 from "metro/15536__.js";
import _mod15551 from "metro/15551__.js";
import _mod15555 from "metro/15555__.js";
import sum from "15558_sum.js";
import _mod15559 from "metro/15559__.js";
import prop from "metro/15554__.js";

let closure_2 = _mod15551("wks");
let _Symbol = _mod15536.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15536.Symbol;
  const tmp2 = _Symbol.for || _mod15536.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15536.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15559(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15555) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15559;
    }
    _Symbol = _mod15536.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
