// _runtime/15366_withoutSetter.js
import _mod15352 from "metro/15352__.js";
import _mod15367 from "metro/15367__.js";
import _mod15371 from "metro/15371__.js";
import _mod15374 from "metro/15374__.js";
import _mod15375 from "metro/15375__.js";
import prop from "metro/15370__.js";

let closure_2 = _mod15367("wks");
let _Symbol = _mod15352.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15352.Symbol;
  const tmp2 = _Symbol.for || _mod15352.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15352.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15374;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15375(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15371) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15375;
    }
    _Symbol = _mod15352.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
