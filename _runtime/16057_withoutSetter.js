// _runtime/16057_withoutSetter.js
import _mod16043 from "metro/16043__.js";
import _mod16058 from "metro/16058__.js";
import _mod16062 from "metro/16062__.js";
import _mod16065 from "metro/16065__.js";
import _mod16066 from "metro/16066__.js";
import prop from "metro/16061__.js";

let closure_2 = _mod16058("wks");
let _Symbol = _mod16043.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16043.Symbol;
  const tmp2 = _Symbol.for || _mod16043.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16043.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16065;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16066(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16062) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16066;
    }
    _Symbol = _mod16043.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
