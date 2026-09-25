// _runtime/13847_withoutSetter.js
import _mod13833 from "metro/13833__.js";
import _mod13848 from "metro/13848__.js";
import _mod13852 from "metro/13852__.js";
import _mod13855 from "metro/13855__.js";
import _mod13856 from "metro/13856__.js";
import prop from "metro/13851__.js";

let closure_2 = _mod13848("wks");
let _Symbol = _mod13833.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13833.Symbol;
  const tmp2 = _Symbol.for || _mod13833.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13833.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13855;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13856(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13852) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13856;
    }
    _Symbol = _mod13833.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
