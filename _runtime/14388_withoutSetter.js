// _runtime/14388_withoutSetter.js
import _mod14374 from "metro/14374__.js";
import _mod14389 from "metro/14389__.js";
import _mod14393 from "metro/14393__.js";
import _mod14396 from "metro/14396__.js";
import _mod14397 from "metro/14397__.js";
import prop from "metro/14392__.js";

let closure_2 = _mod14389("wks");
let _Symbol = _mod14374.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14374.Symbol;
  const tmp2 = _Symbol.for || _mod14374.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14374.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14396;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14397(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14393) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14397;
    }
    _Symbol = _mod14374.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
