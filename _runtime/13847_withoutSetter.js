// === Module 13847: withoutSetter ===

// Module 13847 (withoutSetter)
import _mod13833 from "module_13833" /* 13833 */;
import _mod13848 from "module_13848" /* 13848 */;
import _mod13852 from "module_13852" /* 13852 */;
import _mod13855 from "module_13855" /* 13855 */;
import _mod13856 from "module_13856" /* 13856 */;
import prop from "module_13851" /* 13851 */;

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