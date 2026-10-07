// === Module 645: ? ===

// Module 645
import _mod622 from "module_622" /* 622 */;
import _mod647 from "module_647" /* 647 */;
import _mod648 from "module_648" /* 648 */;
import _mod649 from "module_649" /* 649 */;
import module_617_mod from "module_617" /* 617 */;
import module_522_mod from "module_522" /* 522 */;
import module_646_mod from "module_646" /* 646 */;

let module_617 = module_617_mod;
module_617(module_646);
let module_617 = module_617_mod;
const module_622 = module_617(_mod622);
let module_617 = module_617_mod;
const module_647 = module_617(_mod647);
let module_617 = module_617_mod;
const module_648 = module_617(_mod648);
let module_617 = module_617_mod;
const module_649 = module_617(_mod649);
let module_522 = module_522_mod;
let module_646 = module_646_mod;
if (module_646) {
  const _ArrayBuffer = ArrayBuffer;
  const _module6 = module_646;
  const arrayBuffer = new ArrayBuffer(1);
  const _module61 = new _module6(arrayBuffer);
  module_646 = module_522(_module61) != "[object DataView]";
}
if (!module_646) {
  let _module7 = _mod622;
  if (_module7) {
    const tmp20 = new _mod622();
    _module7 = module_522(tmp20) != "[object Map]";
  }
  module_646 = _module7;
}
if (!module_646) {
  let _module8 = _mod647;
  if (_module8) {
    const _module9 = _mod647;
    _module8 = module_522(_module9.resolve()) != "[object Promise]";
  }
  module_646 = _module8;
}
if (!module_646) {
  let _module10 = _mod648;
  if (_module10) {
    const tmp26 = new _mod648();
    _module10 = module_522(tmp26) != "[object Set]";
  }
  module_646 = _module10;
}
if (!module_646) {
  let _module11 = _mod649;
  if (_module11) {
    const tmp31 = new _mod649();
    _module11 = module_522(tmp31) != "[object WeakMap]";
  }
  module_646 = _module11;
}
if (module_646) {
  module_522 = function v(_module61) {
    const tmp3 = module_522(_module61);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module61.constructor;
    }
    let str = "";
    if (constructor) {
      str = module_617(constructor);
    }
    if (str) {
      if (module_646 === str) {
        return "[object DataView]";
      } else if (module_622 === str) {
        return "[object Map]";
      } else if (module_647 === str) {
        return "[object Promise]";
      } else if (module_648 === str) {
        return "[object Set]";
      } else if (module_649 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default module_522;