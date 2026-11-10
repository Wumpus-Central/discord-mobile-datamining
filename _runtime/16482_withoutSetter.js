// _runtime/16482_withoutSetter.js
import _mod16468 from "metro/16468__.js";
import _mod16483 from "metro/16483__.js";
import _mod16487 from "metro/16487__.js";
import _mod16490 from "metro/16490__.js";
import _mod16491 from "metro/16491__.js";
import prop from "metro/16486__.js";

let closure_2 = _mod16483("wks");
let _Symbol = _mod16468.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16468.Symbol;
  const tmp2 = _Symbol.for || _mod16468.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16468.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16490;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16491(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16487) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16491;
    }
    _Symbol = _mod16468.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
