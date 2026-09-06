// _runtime/14311_withoutSetter.js
import _mod14297 from "metro/14297__.js";
import _mod14312 from "metro/14312__.js";
import _mod14319 from "metro/14319__.js";
import _mod14320 from "metro/14320__.js";
import prop from "metro/14315__.js";

let closure_2 = _mod14312("wks");
let _Symbol = _mod14297.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14297.Symbol;
  const tmp2 = _Symbol.for || _mod14297.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14297.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14319;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14320(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14316)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14320);
    }
    _Symbol = tmp(14297).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
