// _runtime/15220_withoutSetter.js
import _mod15206 from "metro/15206__.js";
import _mod15221 from "metro/15221__.js";
import _mod15225 from "metro/15225__.js";
import _mod15228 from "metro/15228__.js";
import _mod15229 from "metro/15229__.js";
import prop from "metro/15224__.js";

let closure_2 = _mod15221("wks");
let _Symbol = _mod15206.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15206.Symbol;
  const tmp2 = _Symbol.for || _mod15206.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15206.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15228;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15229(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15225) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15229;
    }
    _Symbol = _mod15206.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
