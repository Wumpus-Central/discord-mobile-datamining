// === Module 14924: withoutSetter ===

// Module 14924 (withoutSetter)
import _mod14910 from "module_14910" /* 14910 */;
import _mod14925 from "module_14925" /* 14925 */;
import _mod14929 from "module_14929" /* 14929 */;
import _mod14932 from "module_14932" /* 14932 */;
import _mod14933 from "module_14933" /* 14933 */;
import prop from "module_14928" /* 14928 */;

let closure_2 = _mod14925("wks");
let _Symbol = _mod14910.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14910.Symbol;
  const tmp2 = _Symbol.for || _mod14910.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14910.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14932;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14933(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14929) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14933;
    }
    _Symbol = _mod14910.Symbol;
    tmp5 = _Symbol[arg0];
  }
};