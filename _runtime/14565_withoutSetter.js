// _runtime/14565_withoutSetter.js
import _mod14551 from "metro/14551__.js";
import _mod14566 from "metro/14566__.js";
import _mod14570 from "metro/14570__.js";
import _mod14573 from "metro/14573__.js";
import _mod14574 from "metro/14574__.js";
import prop from "metro/14569__.js";

let closure_2 = _mod14566("wks");
let _Symbol = _mod14551.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14551.Symbol;
  const tmp2 = _Symbol.for || _mod14551.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14551.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14573;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14574(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14570) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14574;
    }
    _Symbol = _mod14551.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
