// _runtime/14409_withoutSetter.js
import _mod14395 from "metro/14395__.js";
import _mod14410 from "metro/14410__.js";
import _mod14414 from "metro/14414__.js";
import _mod14417 from "metro/14417__.js";
import _mod14418 from "metro/14418__.js";
import prop from "metro/14413__.js";

let closure_2 = _mod14410("wks");
let _Symbol = _mod14395.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14395.Symbol;
  const tmp2 = _Symbol.for || _mod14395.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14395.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14417;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14418(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14414) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14418;
    }
    _Symbol = _mod14395.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
