// _runtime/15753_withoutSetter.js
import _mod15739 from "metro/15739__.js";
import _mod15754 from "metro/15754__.js";
import _mod15758 from "metro/15758__.js";
import sum from "15761_sum.js";
import _mod15762 from "metro/15762__.js";
import prop from "metro/15757__.js";

let closure_2 = _mod15754("wks");
let _Symbol = _mod15739.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15739.Symbol;
  const tmp2 = _Symbol.for || _mod15739.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15739.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15762(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15758) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15762;
    }
    _Symbol = _mod15739.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
