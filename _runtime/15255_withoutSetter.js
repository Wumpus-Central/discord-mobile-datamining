// === Module 15255: withoutSetter ===

// Module 15255 (withoutSetter)
import _mod15241 from "module_15241" /* 15241 */;
import _mod15256 from "module_15256" /* 15256 */;
import _mod15260 from "module_15260" /* 15260 */;
import _mod15263 from "module_15263" /* 15263 */;
import _mod15264 from "module_15264" /* 15264 */;
import prop from "module_15259" /* 15259 */;

let closure_2 = _mod15256("wks");
let _Symbol = _mod15241.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15241.Symbol;
  const tmp2 = _Symbol.for || _mod15241.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15241.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15263;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15264(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15260) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15264;
    }
    _Symbol = _mod15241.Symbol;
    tmp5 = _Symbol[arg0];
  }
};