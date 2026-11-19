// _runtime/15465_withoutSetter.js
import _mod15451 from "metro/15451__.js";
import _mod15466 from "metro/15466__.js";
import _mod15470 from "metro/15470__.js";
import sum from "15473_sum.js";
import _mod15474 from "metro/15474__.js";
import prop from "metro/15469__.js";

let closure_2 = _mod15466("wks");
let _Symbol = _mod15451.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15451.Symbol;
  const tmp2 = _Symbol.for || _mod15451.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15451.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15474(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15470) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15474;
    }
    _Symbol = _mod15451.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
