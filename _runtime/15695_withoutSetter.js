// _runtime/15695_withoutSetter.js
import _mod15681 from "metro/15681__.js";
import _mod15696 from "metro/15696__.js";
import _mod15700 from "metro/15700__.js";
import sum from "15703_sum.js";
import _mod15704 from "metro/15704__.js";
import prop from "metro/15699__.js";

let closure_2 = _mod15696("wks");
let _Symbol = _mod15681.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15681.Symbol;
  const tmp2 = _Symbol.for || _mod15681.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15681.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15704(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15700) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15704;
    }
    _Symbol = _mod15681.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
