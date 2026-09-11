// _runtime/14364_withoutSetter.js
import _mod14350 from "metro/14350__.js";
import _mod14365 from "metro/14365__.js";
import _mod14369 from "metro/14369__.js";
import _mod14372 from "metro/14372__.js";
import _mod14373 from "metro/14373__.js";
import prop from "metro/14368__.js";

let closure_2 = _mod14365("wks");
let _Symbol = _mod14350.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14350.Symbol;
  const tmp2 = _Symbol.for || _mod14350.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14350.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14372;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14373(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14369) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14373;
    }
    _Symbol = _mod14350.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
