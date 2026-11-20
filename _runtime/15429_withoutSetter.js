// === Module 15429: withoutSetter ===

// Module 15429 (withoutSetter)
import _mod15415 from "module_15415" /* 15415 */;
import _mod15430 from "module_15430" /* 15430 */;
import _mod15434 from "module_15434" /* 15434 */;
import sum from "sum" /* 15437 */;
import _mod15438 from "module_15438" /* 15438 */;
import prop from "module_15433" /* 15433 */;

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