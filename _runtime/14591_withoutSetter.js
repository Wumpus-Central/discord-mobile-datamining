// _runtime/14591_withoutSetter.js
import _mod14577 from "metro/14577__.js";
import _mod14592 from "metro/14592__.js";
import _mod14596 from "metro/14596__.js";
import _mod14599 from "metro/14599__.js";
import _mod14600 from "metro/14600__.js";
import prop from "metro/14595__.js";

let closure_2 = _mod14592("wks");
let _Symbol = _mod14577.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14577.Symbol;
  const tmp2 = _Symbol.for || _mod14577.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14577.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14599;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14600(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14596) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14600;
    }
    _Symbol = _mod14577.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
