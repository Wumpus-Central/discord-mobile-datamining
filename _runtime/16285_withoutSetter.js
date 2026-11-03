// _runtime/16285_withoutSetter.js
import _mod16271 from "metro/16271__.js";
import _mod16286 from "metro/16286__.js";
import _mod16290 from "metro/16290__.js";
import _mod16293 from "metro/16293__.js";
import _mod16294 from "metro/16294__.js";
import prop from "metro/16289__.js";

let closure_2 = _mod16286("wks");
let _Symbol = _mod16271.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16271.Symbol;
  const tmp2 = _Symbol.for || _mod16271.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16271.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16293;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16294(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16290) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16294;
    }
    _Symbol = _mod16271.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
