// _runtime/14073_withoutSetter.js
import _mod14059 from "metro/14059__.js";
import _mod14074 from "metro/14074__.js";
import _mod14078 from "metro/14078__.js";
import _mod14081 from "metro/14081__.js";
import _mod14082 from "metro/14082__.js";
import prop from "metro/14077__.js";

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
