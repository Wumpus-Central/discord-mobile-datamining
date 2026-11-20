// _runtime/15429_withoutSetter.js
import _mod15415 from "metro/15415__.js";
import _mod15430 from "metro/15430__.js";
import _mod15434 from "metro/15434__.js";
import sum from "15437_sum.js";
import _mod15438 from "metro/15438__.js";
import prop from "metro/15433__.js";

let closure_2 = _mod15430("wks");
let _Symbol = _mod15415.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod15415.Symbol;
  const tmp2 = _Symbol.for || _mod15415.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod15415.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod15438(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    if (!_mod15434) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      closure_2[arg0] = tmp5;
    } else {
      _mod15438;
    }
    _Symbol = _mod15415.Symbol;
    tmp5 = _Symbol[arg0];
  }
};
