// _runtime/13971_withoutSetter.js
import _mod13957 from "metro/13957__.js";
import _mod13972 from "metro/13972__.js";
import _mod13976 from "metro/13976__.js";
import _mod13979 from "metro/13979__.js";
import _mod13980 from "metro/13980__.js";
import prop from "metro/13975__.js";

let closure_2 = _mod13972("wks");
let _Symbol = _mod13957.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13957.Symbol;
  const tmp2 = _Symbol.for || _mod13957.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13957.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod13979;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod13980(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod13976) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod13980;
    }
    _Symbol = _mod13957.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
