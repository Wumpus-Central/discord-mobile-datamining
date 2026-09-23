// _runtime/14677_withoutSetter.js
import _mod14663 from "metro/14663__.js";
import _mod14678 from "metro/14678__.js";
import _mod14682 from "metro/14682__.js";
import _mod14685 from "metro/14685__.js";
import _mod14686 from "metro/14686__.js";
import prop from "metro/14681__.js";

let closure_2 = _mod14678("wks");
let _Symbol = _mod14663.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14663.Symbol;
  const tmp2 = _Symbol.for || _mod14663.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14663.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14685;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14686(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14682) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14686;
    }
    _Symbol = _mod14663.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
