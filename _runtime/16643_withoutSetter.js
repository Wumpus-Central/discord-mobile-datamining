// _runtime/16643_withoutSetter.js
import _mod16629 from "metro/16629__.js";
import _mod16644 from "metro/16644__.js";
import _mod16648 from "metro/16648__.js";
import _mod16651 from "metro/16651__.js";
import _mod16652 from "metro/16652__.js";
import prop from "metro/16647__.js";

let closure_2 = _mod16644("wks");
let _Symbol = _mod16629.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16629.Symbol;
  const tmp2 = _Symbol.for || _mod16629.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16629.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16651;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16652(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16648) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16652;
    }
    _Symbol = _mod16629.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
