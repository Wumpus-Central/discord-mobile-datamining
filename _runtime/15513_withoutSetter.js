// _runtime/15513_withoutSetter.js
import _mod15499 from "metro/15499__.js";
import _mod15514 from "metro/15514__.js";
import _mod15518 from "metro/15518__.js";
import _mod15521 from "metro/15521__.js";
import _mod15522 from "metro/15522__.js";
import prop from "metro/15517__.js";

let closure_2 = _mod15514("wks");
let _Symbol = _mod15499.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15499.Symbol;
  const tmp2 = _Symbol.for || _mod15499.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15499.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15521;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15522(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15518) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15522;
    }
    _Symbol = _mod15499.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
