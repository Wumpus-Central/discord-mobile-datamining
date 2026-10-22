// _runtime/15500_withoutSetter.js
import _mod15486 from "metro/15486__.js";
import _mod15501 from "metro/15501__.js";
import _mod15505 from "metro/15505__.js";
import _mod15508 from "metro/15508__.js";
import _mod15509 from "metro/15509__.js";
import prop from "metro/15504__.js";

let closure_2 = _mod15501("wks");
let _Symbol = _mod15486.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15486.Symbol;
  const tmp2 = _Symbol.for || _mod15486.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15486.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15508;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15509(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15505) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15509;
    }
    _Symbol = _mod15486.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
