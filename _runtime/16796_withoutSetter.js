// _runtime/16796_withoutSetter.js
import _mod16782 from "metro/16782__.js";
import _mod16797 from "metro/16797__.js";
import _mod16801 from "metro/16801__.js";
import _mod16804 from "metro/16804__.js";
import _mod16805 from "metro/16805__.js";
import prop from "metro/16800__.js";

let closure_2 = _mod16797("wks");
let _Symbol = _mod16782.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16782.Symbol;
  const tmp2 = _Symbol.for || _mod16782.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16782.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16804;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16805(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16801) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16805;
    }
    _Symbol = _mod16782.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
