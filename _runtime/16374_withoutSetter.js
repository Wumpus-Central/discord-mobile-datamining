// _runtime/16374_withoutSetter.js
import _mod16360 from "metro/16360__.js";
import _mod16375 from "metro/16375__.js";
import _mod16379 from "metro/16379__.js";
import _mod16382 from "metro/16382__.js";
import _mod16383 from "metro/16383__.js";
import prop from "metro/16378__.js";

let closure_2 = _mod16375("wks");
let _Symbol = _mod16360.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16360.Symbol;
  const tmp2 = _Symbol.for || _mod16360.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16360.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16382;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16383(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16379) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16383;
    }
    _Symbol = _mod16360.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
