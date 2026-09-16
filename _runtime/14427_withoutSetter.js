// _runtime/14427_withoutSetter.js
import _mod14413 from "metro/14413__.js";
import _mod14428 from "metro/14428__.js";
import _mod14432 from "metro/14432__.js";
import _mod14435 from "metro/14435__.js";
import _mod14436 from "metro/14436__.js";
import prop from "metro/14431__.js";

let closure_2 = _mod14428("wks");
let _Symbol = _mod14413.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14413.Symbol;
  const tmp2 = _Symbol.for || _mod14413.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14413.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14435;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14436(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14432) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14436;
    }
    _Symbol = _mod14413.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
