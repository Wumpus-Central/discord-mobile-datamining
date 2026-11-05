// _runtime/16400_withoutSetter.js
import _mod16386 from "metro/16386__.js";
import _mod16401 from "metro/16401__.js";
import _mod16405 from "metro/16405__.js";
import _mod16408 from "metro/16408__.js";
import _mod16409 from "metro/16409__.js";
import prop from "metro/16404__.js";

let closure_2 = _mod16401("wks");
let _Symbol = _mod16386.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16386.Symbol;
  const tmp2 = _Symbol.for || _mod16386.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16386.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16408;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16409(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16405) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16409;
    }
    _Symbol = _mod16386.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
