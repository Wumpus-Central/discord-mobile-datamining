// _runtime/14597_withoutSetter.js
import _mod14583 from "metro/14583__.js";
import _mod14598 from "metro/14598__.js";
import _mod14602 from "metro/14602__.js";
import _mod14605 from "metro/14605__.js";
import _mod14606 from "metro/14606__.js";
import prop from "metro/14601__.js";

let closure_2 = _mod14598("wks");
let _Symbol = _mod14583.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14583.Symbol;
  const tmp2 = _Symbol.for || _mod14583.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14583.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14605;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14606(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14602) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14606;
    }
    _Symbol = _mod14583.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
