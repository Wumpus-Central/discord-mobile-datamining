// _runtime/14006_withoutSetter.js
import _mod13992 from "metro/13992__.js";
import _mod14007 from "metro/14007__.js";
import _mod14011 from "metro/14011__.js";
import _mod14014 from "metro/14014__.js";
import _mod14015 from "metro/14015__.js";
import prop from "metro/14010__.js";

let closure_2 = _mod14007("wks");
let _Symbol = _mod13992.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13992.Symbol;
  const tmp2 = _Symbol.for || _mod13992.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13992.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14014;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14015(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14011) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14015;
    }
    _Symbol = _mod13992.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
