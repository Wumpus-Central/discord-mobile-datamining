// === Module 14073: withoutSetter ===

// Module 14073 (withoutSetter)
import _mod14059 from "module_14059" /* 14059 */;
import _mod14074 from "module_14074" /* 14074 */;
import _mod14078 from "module_14078" /* 14078 */;
import _mod14081 from "module_14081" /* 14081 */;
import _mod14082 from "module_14082" /* 14082 */;
import prop from "module_14077" /* 14077 */;

let closure_2 = _mod14074("wks");
let _Symbol = _mod14059.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14059.Symbol;
  const tmp2 = _Symbol.for || _mod14059.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14059.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14081;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14082(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14078) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14082;
    }
    _Symbol = _mod14059.Symbol;
    tmp5 = _Symbol[arg0];
  }
};