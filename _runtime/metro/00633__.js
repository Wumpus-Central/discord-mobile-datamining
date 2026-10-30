// === Module 633: ? ===

// Module 633
import _mod610 from "module_610" /* 610 */;
import _mod635 from "module_635" /* 635 */;
import _mod636 from "module_636" /* 636 */;
import _mod637 from "module_637" /* 637 */;
import module_605_mod from "module_605" /* 605 */;
import module_522_mod from "module_522" /* 522 */;
import module_634_mod from "module_634" /* 634 */;

let module_605 = module_605_mod;
module_605(module_634);
let module_605 = module_605_mod;
const module_610 = module_605(_mod610);
let module_605 = module_605_mod;
const module_635 = module_605(_mod635);
let module_605 = module_605_mod;
const module_636 = module_605(_mod636);
let module_605 = module_605_mod;
const module_637 = module_605(_mod637);
let module_522 = module_522_mod;
let module_634 = module_634_mod;
if (module_634) {
  const _ArrayBuffer = ArrayBuffer;
  const _module6 = module_634;
  const arrayBuffer = new ArrayBuffer(1);
  const _module61 = new _module6(arrayBuffer);
  module_634 = module_522(_module61) != "[object DataView]";
}
if (!module_634) {
  let _module7 = _mod610;
  if (_module7) {
    const tmp20 = new _mod610();
    _module7 = module_522(tmp20) != "[object Map]";
  }
  module_634 = _module7;
}
if (!module_634) {
  let _module8 = _mod635;
  if (_module8) {
    const _module9 = _mod635;
    _module8 = module_522(_module9.resolve()) != "[object Promise]";
  }
  module_634 = _module8;
}
if (!module_634) {
  let _module10 = _mod636;
  if (_module10) {
    const tmp26 = new _mod636();
    _module10 = module_522(tmp26) != "[object Set]";
  }
  module_634 = _module10;
}
if (!module_634) {
  let _module11 = _mod637;
  if (_module11) {
    const tmp31 = new _mod637();
    _module11 = module_522(tmp31) != "[object WeakMap]";
  }
  module_634 = _module11;
}
if (module_634) {
  module_522 = function v(_module61) {
    const tmp3 = module_522(_module61);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module61.constructor;
    }
    let str = "";
    if (constructor) {
      str = module_605(constructor);
    }
    if (str) {
      if (module_634 === str) {
        return "[object DataView]";
      } else if (module_610 === str) {
        return "[object Map]";
      } else if (module_635 === str) {
        return "[object Promise]";
      } else if (module_636 === str) {
        return "[object Set]";
      } else if (module_637 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default module_522;