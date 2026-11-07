// _runtime/16445_withoutSetter.js
import _mod16431 from "metro/16431__.js";
import _mod16446 from "metro/16446__.js";
import _mod16450 from "metro/16450__.js";
import _mod16453 from "metro/16453__.js";
import _mod16454 from "metro/16454__.js";
import prop from "metro/16449__.js";

let closure_2 = _mod16446("wks");
let _Symbol = _mod16431.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16431.Symbol;
  const tmp2 = _Symbol.for || _mod16431.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16431.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16453;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16454(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16450) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16454;
    }
    _Symbol = _mod16431.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
