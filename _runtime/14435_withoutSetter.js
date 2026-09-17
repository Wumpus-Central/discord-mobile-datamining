// _runtime/14435_withoutSetter.js
import _mod14421 from "metro/14421__.js";
import _mod14436 from "metro/14436__.js";
import _mod14440 from "metro/14440__.js";
import _mod14443 from "metro/14443__.js";
import _mod14444 from "metro/14444__.js";
import prop from "metro/14439__.js";

let closure_2 = _mod14436("wks");
let _Symbol = _mod14421.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14421.Symbol;
  const tmp2 = _Symbol.for || _mod14421.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14421.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14443;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14444(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14440) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14444;
    }
    _Symbol = _mod14421.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
