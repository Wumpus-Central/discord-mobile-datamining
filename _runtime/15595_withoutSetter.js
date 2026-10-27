// _runtime/15595_withoutSetter.js
import _mod15581 from "metro/15581__.js";
import _mod15596 from "metro/15596__.js";
import _mod15600 from "metro/15600__.js";
import _mod15603 from "metro/15603__.js";
import _mod15604 from "metro/15604__.js";
import prop from "metro/15599__.js";

let closure_2 = _mod15596("wks");
let _Symbol = _mod15581.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15581.Symbol;
  const tmp2 = _Symbol.for || _mod15581.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15581.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15603;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15604(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15600) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15604;
    }
    _Symbol = _mod15581.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
