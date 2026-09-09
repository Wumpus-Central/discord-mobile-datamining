// _runtime/14339_withoutSetter.js
import _mod14325 from "metro/14325__.js";
import _mod14340 from "metro/14340__.js";
import _mod14344 from "metro/14344__.js";
import _mod14347 from "metro/14347__.js";
import _mod14348 from "metro/14348__.js";
import prop from "metro/14343__.js";

let closure_2 = _mod14340("wks");
let _Symbol = _mod14325.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14325.Symbol;
  const tmp2 = _Symbol.for || _mod14325.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14325.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14347;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14348(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14344) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14348;
    }
    _Symbol = _mod14325.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
