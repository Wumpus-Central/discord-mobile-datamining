// _runtime/14585_withoutSetter.js
import _mod14571 from "metro/14571__.js";
import _mod14586 from "metro/14586__.js";
import _mod14590 from "metro/14590__.js";
import _mod14593 from "metro/14593__.js";
import _mod14594 from "metro/14594__.js";
import prop from "metro/14589__.js";

let closure_2 = _mod14586("wks");
let _Symbol = _mod14571.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14571.Symbol;
  const tmp2 = _Symbol.for || _mod14571.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14571.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14593;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14594(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14590) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14594;
    }
    _Symbol = _mod14571.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
