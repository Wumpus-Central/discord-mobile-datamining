// _runtime/14530_withoutSetter.js
import _mod14516 from "metro/14516__.js";
import _mod14531 from "metro/14531__.js";
import _mod14535 from "metro/14535__.js";
import _mod14538 from "metro/14538__.js";
import _mod14539 from "metro/14539__.js";
import prop from "metro/14534__.js";

let closure_2 = _mod14531("wks");
let _Symbol = _mod14516.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14516.Symbol;
  const tmp2 = _Symbol.for || _mod14516.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14516.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14538;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14539(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14535) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14539;
    }
    _Symbol = _mod14516.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
