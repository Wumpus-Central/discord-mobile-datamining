// _runtime/15554_withoutSetter.js
import _mod15540 from "metro/15540__.js";
import _mod15555 from "metro/15555__.js";
import _mod15559 from "metro/15559__.js";
import _mod15562 from "metro/15562__.js";
import _mod15563 from "metro/15563__.js";
import prop from "metro/15558__.js";

let closure_2 = _mod15555("wks");
let _Symbol = _mod15540.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15540.Symbol;
  const tmp2 = _Symbol.for || _mod15540.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15540.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15562;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15563(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15559) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15563;
    }
    _Symbol = _mod15540.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
