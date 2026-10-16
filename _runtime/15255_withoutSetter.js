// _runtime/15255_withoutSetter.js
import _mod15241 from "metro/15241__.js";
import _mod15256 from "metro/15256__.js";
import _mod15260 from "metro/15260__.js";
import _mod15263 from "metro/15263__.js";
import _mod15264 from "metro/15264__.js";
import prop from "metro/15259__.js";

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
