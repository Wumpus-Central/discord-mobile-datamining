// === Module 13971: withoutSetter ===

// Module 13971 (withoutSetter)
import _mod13957 from "module_13957" /* 13957 */;
import _mod13972 from "module_13972" /* 13972 */;
import _mod13976 from "module_13976" /* 13976 */;
import _mod13979 from "module_13979" /* 13979 */;
import _mod13980 from "module_13980" /* 13980 */;
import prop from "module_13975" /* 13975 */;

let closure_2 = _mod13972("wks");
let _Symbol = _mod13957.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13957.Symbol;
  const tmp2 = _Symbol.for || _mod13957.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13957.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13979;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13980(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13976) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13980;
    }
    _Symbol = _mod13957.Symbol;
    tmp5 = _Symbol[arg0];
  }
};