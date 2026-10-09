// _runtime/14488_withoutSetter.js
import _mod14474 from "metro/14474__.js";
import _mod14489 from "metro/14489__.js";
import _mod14493 from "metro/14493__.js";
import _mod14496 from "metro/14496__.js";
import _mod14497 from "metro/14497__.js";
import prop from "metro/14492__.js";

let closure_2 = _mod14489("wks");
let _Symbol = _mod14474.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14474.Symbol;
  const tmp2 = _Symbol.for || _mod14474.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14474.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14496;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14497(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14493) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14497;
    }
    _Symbol = _mod14474.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
