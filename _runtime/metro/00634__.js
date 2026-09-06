// _runtime/metro/00634__.js
import _mod611 from "00611__.js";
import _mod636 from "00636__.js";
import _mod637 from "00637__.js";
import _mod638 from "00638__.js";
import 00606__ from "00606__.js";
import 00522__ from "00522__.js";
import 00635__ from "00635__.js";

module_606(module_635);
const module_611 = module_606(_mod611);
const module_636 = module_606(_mod636);
const module_637 = module_606(_mod637);
const module_638 = module_606(_mod638);
if (module_635) {
  const _ArrayBuffer = ArrayBuffer;
  let _module6 = module_635;
  const arrayBuffer = new ArrayBuffer(1);
  _module6 = new _module6(arrayBuffer);
  module_635 = module_522(_module6) != "[object DataView]";
}
if (!module_635) {
  let _module7 = _mod611;
  if (_module7) {
    const tmp20 = new _mod611();
    _module7 = module_522(tmp20) != "[object Map]";
  }
  module_635 = _module7;
}
if (!module_635) {
  let _module8 = _mod636;
  if (_module8) {
    const _module9 = _mod636;
    _module8 = module_522(_module9.resolve()) != "[object Promise]";
  }
  module_635 = _module8;
}
if (!module_635) {
  let _module10 = _mod637;
  if (_module10) {
    const tmp26 = new _mod637();
    _module10 = module_522(tmp26) != "[object Set]";
  }
  module_635 = _module10;
}
if (!module_635) {
  let _module11 = _mod638;
  if (_module11) {
    const tmp31 = new _mod638();
    _module11 = module_522(tmp31) != "[object WeakMap]";
  }
  module_635 = _module11;
}
if (module_635) {
  module_522 = function v(_module6) {
    const tmp3 = module_522(_module6);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module6.constructor;
    }
    let str = "";
    if (constructor) {
      str = module_606(constructor);
    }
    if (str) {
      if (module_635 === str) {
        return "[object DataView]";
      } else if (module_611 === str) {
        return "[object Map]";
      } else if (module_636 === str) {
        return "[object Promise]";
      } else if (module_637 === str) {
        return "[object Set]";
      } else if (module_638 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default module_522;