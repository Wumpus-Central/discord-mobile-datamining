// _runtime/14924_withoutSetter.js
import _mod14910 from "metro/14910__.js";
import _mod14925 from "metro/14925__.js";
import _mod14929 from "metro/14929__.js";
import _mod14932 from "metro/14932__.js";
import _mod14933 from "metro/14933__.js";
import prop from "metro/14928__.js";

let closure_2 = _mod14925("wks");
let _Symbol = _mod14910.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14910.Symbol;
  const tmp2 = _Symbol.for || _mod14910.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14910.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14932;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14933(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14929) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14933;
    }
    _Symbol = _mod14910.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
