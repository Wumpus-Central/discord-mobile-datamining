// _runtime/15558_withoutSetter.js
import _mod15544 from "metro/15544__.js";
import _mod15559 from "metro/15559__.js";
import _mod15563 from "metro/15563__.js";
import _mod15566 from "metro/15566__.js";
import _mod15567 from "metro/15567__.js";
import prop from "metro/15562__.js";

let closure_2 = _mod15559("wks");
let _Symbol = _mod15544.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15544.Symbol;
  const tmp2 = _Symbol.for || _mod15544.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15544.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15566;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15567(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15563) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15567;
    }
    _Symbol = _mod15544.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
