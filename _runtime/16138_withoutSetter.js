// _runtime/16138_withoutSetter.js
import _mod16124 from "metro/16124__.js";
import _mod16139 from "metro/16139__.js";
import _mod16143 from "metro/16143__.js";
import _mod16146 from "metro/16146__.js";
import _mod16147 from "metro/16147__.js";
import prop from "metro/16142__.js";

let closure_2 = _mod16139("wks");
let _Symbol = _mod16124.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16124.Symbol;
  const tmp2 = _Symbol.for || _mod16124.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16124.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16146;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16147(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16143) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16147;
    }
    _Symbol = _mod16124.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
