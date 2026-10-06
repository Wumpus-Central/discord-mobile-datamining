// _runtime/metro/14093__.js
import _mod14079 from "14079__.js";
import _mod14094 from "14094__.js";
import _mod14098 from "14098__.js";
import _mod14101 from "14101__.js";
import _mod14102 from "14102__.js";
import prop from "14097__.js";

let tmp2;
let closure_2 = _mod14094("wks");
const _Symbol = _mod14079.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14079.Symbol;
  _Symbol.for || _mod14079.Symbol;
} else {
  tmp2 = (_Symbol && _mod14079.Symbol.withoutSetter) || _mod14101;
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
