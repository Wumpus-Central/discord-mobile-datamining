// _runtime/14314_withoutSetter.js
import _mod14300 from "metro/14300__.js";
import _mod14315 from "metro/14315__.js";
import _mod14319 from "metro/14319__.js";
import _mod14322 from "metro/14322__.js";
import _mod14323 from "metro/14323__.js";
import prop from "metro/14318__.js";

let closure_2 = _mod14315("wks");
let _Symbol = _mod14300.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14300.Symbol;
  const tmp2 = _Symbol.for || _mod14300.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14300.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14322;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14323(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod14319) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod14323;
    }
    _Symbol = _mod14300.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
