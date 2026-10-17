// _runtime/15334_withoutSetter.js
import _mod15320 from "metro/15320__.js";
import _mod15335 from "metro/15335__.js";
import _mod15339 from "metro/15339__.js";
import _mod15342 from "metro/15342__.js";
import _mod15343 from "metro/15343__.js";
import prop from "metro/15338__.js";

let closure_2 = _mod15335("wks");
let _Symbol = _mod15320.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15320.Symbol;
  const tmp2 = _Symbol.for || _mod15320.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15320.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15342;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15343(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15339) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15343;
    }
    _Symbol = _mod15320.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
