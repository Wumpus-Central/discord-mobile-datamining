// === Module 14093: ? ===

// Module 14093
import _mod14079 from "module_14079" /* 14079 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14098 from "module_14098" /* 14098 */;
import _mod14101 from "module_14101" /* 14101 */;
import _mod14102 from "module_14102" /* 14102 */;
import prop from "module_14097" /* 14097 */;

let tmp2;
let closure_2 = _mod14094("wks");
const _Symbol = _mod14079.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14079.Symbol;
  _Symbol.for || _mod14079.Symbol;
} else {
  tmp2 = _Symbol && _mod14079.Symbol.withoutSetter || _mod14101;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14102(closure_2, arg0)) {
    if (_mod14098) {
      let tmp6;
      const tmpResult = _mod14102;
      if (tmpResult(_mod14079.Symbol, arg0)) {
        tmp6 = _mod14079.Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};