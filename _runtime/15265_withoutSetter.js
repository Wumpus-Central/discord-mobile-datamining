// _runtime/15265_withoutSetter.js
import _mod15251 from "metro/15251__.js";
import _mod15266 from "metro/15266__.js";
import _mod15270 from "metro/15270__.js";
import _mod15273 from "metro/15273__.js";
import _mod15274 from "metro/15274__.js";
import prop from "metro/15269__.js";

let closure_2 = _mod15266("wks");
let _Symbol = _mod15251.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15251.Symbol;
  const tmp2 = _Symbol.for || _mod15251.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15251.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15273;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15274(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15270) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15274;
    }
    _Symbol = _mod15251.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
