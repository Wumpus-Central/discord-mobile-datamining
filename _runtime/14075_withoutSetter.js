// _runtime/14075_withoutSetter.js
import _mod14061 from "metro/14061__.js";
import _mod14076 from "metro/14076__.js";
import _mod14080 from "metro/14080__.js";
import _mod14083 from "metro/14083__.js";
import _mod14084 from "metro/14084__.js";
import prop from "metro/14079__.js";

let closure_2 = _mod14076("wks");
let _Symbol = _mod14061.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14061.Symbol;
  const tmp2 = _Symbol.for || _mod14061.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14061.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14083;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14084(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14080) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14084;
    }
    _Symbol = _mod14061.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
