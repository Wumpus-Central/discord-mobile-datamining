// === Module 14409: withoutSetter ===

// Module 14409 (withoutSetter)
import _mod14395 from "module_14395" /* 14395 */;
import _mod14410 from "module_14410" /* 14410 */;
import _mod14414 from "module_14414" /* 14414 */;
import _mod14417 from "module_14417" /* 14417 */;
import _mod14418 from "module_14418" /* 14418 */;
import prop from "module_14413" /* 14413 */;

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