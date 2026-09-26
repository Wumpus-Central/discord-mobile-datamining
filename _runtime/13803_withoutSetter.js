// _runtime/13803_withoutSetter.js
import _mod13789 from "metro/13789__.js";
import _mod13804 from "metro/13804__.js";
import _mod13808 from "metro/13808__.js";
import _mod13811 from "metro/13811__.js";
import _mod13812 from "metro/13812__.js";
import prop from "metro/13807__.js";

let closure_2 = _mod13804("wks");
let _Symbol = _mod13789.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13789.Symbol;
  const tmp2 = _Symbol.for || _mod13789.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13789.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13811;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13812(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13808) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13812;
    }
    _Symbol = _mod13789.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
