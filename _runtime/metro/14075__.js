// _runtime/metro/14075__.js
import _mod14061 from "14061__.js";
import _mod14076 from "14076__.js";
import _mod14080 from "14080__.js";
import _mod14083 from "14083__.js";
import _mod14084 from "14084__.js";
import prop from "14079__.js";

let tmp2;
let closure_2 = _mod14076("wks");
const _Symbol = _mod14061.Symbol;
if (prop) {
  tmp2 = _Symbol.for || _mod14061.Symbol;
  _Symbol.for || _mod14061.Symbol;
} else {
  tmp2 = (_Symbol && _mod14061.Symbol.withoutSetter) || _mod14083;
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
