// _runtime/13998_withoutSetter.js
import _mod13984 from "metro/13984__.js";
import _mod13999 from "metro/13999__.js";
import _mod14003 from "metro/14003__.js";
import _mod14006 from "metro/14006__.js";
import _mod14007 from "metro/14007__.js";
import prop from "metro/14002__.js";

let closure_2 = _mod13999("wks");
let _Symbol = _mod13984.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13984.Symbol;
  const tmp2 = _Symbol.for || _mod13984.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13984.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14006;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14007(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14003) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14007;
    }
    _Symbol = _mod13984.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
