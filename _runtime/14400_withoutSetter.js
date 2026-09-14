// _runtime/14400_withoutSetter.js
import _mod14386 from "metro/14386__.js";
import _mod14401 from "metro/14401__.js";
import _mod14405 from "metro/14405__.js";
import _mod14408 from "metro/14408__.js";
import _mod14409 from "metro/14409__.js";
import prop from "metro/14404__.js";

let closure_2 = _mod14401("wks");
let _Symbol = _mod14386.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14386.Symbol;
  const tmp2 = _Symbol.for || _mod14386.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14386.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14408;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14409(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14405) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14409;
    }
    _Symbol = _mod14386.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
