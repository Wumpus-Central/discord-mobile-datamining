// === Module 14075: ? ===

// Module 14075
import _mod14061 from "module_14061" /* 14061 */;
import _mod14076 from "module_14076" /* 14076 */;
import _mod14080 from "module_14080" /* 14080 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14084 from "module_14084" /* 14084 */;
import prop from "module_14079" /* 14079 */;

let tmp2;
let closure_2 = _mod14076("wks");
const _Symbol = _mod14061.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14061.Symbol;
  _Symbol.for || _mod14061.Symbol;
} else {
  tmp2 = _Symbol && _mod14061.Symbol.withoutSetter || _mod14083;
}
let closure_3 = tmp2;

export default (arg0) => {
  if (!_mod14084(closure_2, arg0)) {
    if (_mod14080) {
      let tmp6;
      const tmpResult = _mod14084;
      if (tmpResult(_mod14061.Symbol, arg0)) {
        tmp6 = _mod14061.Symbol[arg0];
      }
      closure_2[arg0] = tmp6;
    }
    tmp6 = closure_3(`Symbol.${arg0}`);
  }
  return closure_2[arg0];
};