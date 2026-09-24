// _runtime/14686_withoutSetter.js
import _mod14672 from "metro/14672__.js";
import _mod14687 from "metro/14687__.js";
import _mod14691 from "metro/14691__.js";
import _mod14694 from "metro/14694__.js";
import _mod14695 from "metro/14695__.js";
import prop from "metro/14690__.js";

let closure_2 = _mod14687("wks");
let _Symbol = _mod14672.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14672.Symbol;
  const tmp2 = _Symbol.for || _mod14672.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14672.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14694;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14695(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14691) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14695;
    }
    _Symbol = _mod14672.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
