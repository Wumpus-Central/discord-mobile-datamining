// _runtime/14542_withoutSetter.js
import _mod14528 from "metro/14528__.js";
import _mod14543 from "metro/14543__.js";
import _mod14547 from "metro/14547__.js";
import _mod14550 from "metro/14550__.js";
import _mod14551 from "metro/14551__.js";
import prop from "metro/14546__.js";

let closure_2 = _mod14543("wks");
let _Symbol = _mod14528.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14528.Symbol;
  const tmp2 = _Symbol.for || _mod14528.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14528.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14550;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14551(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14547) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14551;
    }
    _Symbol = _mod14528.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
