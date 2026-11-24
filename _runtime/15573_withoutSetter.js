// _runtime/15573_withoutSetter.js
import _mod15559 from "metro/15559__.js";
import _mod15574 from "metro/15574__.js";
import _mod15578 from "metro/15578__.js";
import sum from "15581_sum.js";
import _mod15582 from "metro/15582__.js";
import prop from "metro/15577__.js";

let closure_2 = _mod15574("wks");
let _Symbol = _mod15559.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15559.Symbol;
  const tmp2 = _Symbol.for || _mod15559.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15559.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15582(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15578) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15582;
    }
    _Symbol = _mod15559.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
