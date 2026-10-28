// _runtime/15821_withoutSetter.js
import _mod15807 from "metro/15807__.js";
import _mod15822 from "metro/15822__.js";
import _mod15826 from "metro/15826__.js";
import _mod15829 from "metro/15829__.js";
import _mod15830 from "metro/15830__.js";
import prop from "metro/15825__.js";

let closure_2 = _mod15822("wks");
let _Symbol = _mod15807.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15807.Symbol;
  const tmp2 = _Symbol.for || _mod15807.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15807.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod15829;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15830(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15826) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15830;
    }
    _Symbol = _mod15807.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
