// _runtime/16638_withoutSetter.js
import _mod16624 from "metro/16624__.js";
import _mod16639 from "metro/16639__.js";
import _mod16643 from "metro/16643__.js";
import _mod16646 from "metro/16646__.js";
import _mod16647 from "metro/16647__.js";
import prop from "metro/16642__.js";

let closure_2 = _mod16639("wks");
let _Symbol = _mod16624.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod16624.Symbol;
  const tmp2 = _Symbol.for || _mod16624.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod16624.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod16646;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod16647(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod16643) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod16647;
    }
    _Symbol = _mod16624.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
