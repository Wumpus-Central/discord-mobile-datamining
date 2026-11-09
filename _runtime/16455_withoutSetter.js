// _runtime/16455_withoutSetter.js
import _mod16441 from "metro/16441__.js";
import _mod16456 from "metro/16456__.js";
import _mod16460 from "metro/16460__.js";
import _mod16463 from "metro/16463__.js";
import _mod16464 from "metro/16464__.js";
import prop from "metro/16459__.js";

let closure_2 = _mod16456("wks");
let _Symbol = _mod16441.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16441.Symbol;
  const tmp2 = _Symbol.for || _mod16441.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16441.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16463;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16464(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16460) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16464;
    }
    _Symbol = _mod16441.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
