// _runtime/13802_withoutSetter.js
import _mod13788 from "metro/13788__.js";
import _mod13803 from "metro/13803__.js";
import _mod13807 from "metro/13807__.js";
import _mod13810 from "metro/13810__.js";
import _mod13811 from "metro/13811__.js";
import prop from "metro/13806__.js";

let closure_2 = _mod13803("wks");
let _Symbol = _mod13788.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13788.Symbol;
  const tmp2 = _Symbol.for || _mod13788.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13788.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13810;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13811(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13807) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13811;
    }
    _Symbol = _mod13788.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
