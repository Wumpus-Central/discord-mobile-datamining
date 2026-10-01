// === Module 14006: withoutSetter ===

// Module 14006 (withoutSetter)
import _mod13992 from "module_13992" /* 13992 */;
import _mod14007 from "module_14007" /* 14007 */;
import _mod14011 from "module_14011" /* 14011 */;
import _mod14014 from "module_14014" /* 14014 */;
import _mod14015 from "module_14015" /* 14015 */;
import prop from "module_14010" /* 14010 */;

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