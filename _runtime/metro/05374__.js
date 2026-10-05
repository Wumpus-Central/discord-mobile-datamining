// _runtime/metro/05374__.js
import _mod1293 from "01293__.js";
import callBindBasic from "../01303_callBindBasic.js";
import module_1294_mod from "01294__.js";

const obj = {};
try {
  obj.__proto__ = null;
} catch (tmp2) {
  throw tmp2;
}
const tmp3 = "toString" in obj;
let module_1294 = module_1294_mod;
if (module_1294) {
  const _Object = Object;
  module_1294 = module_1294(Object.prototype, "__proto__");
}
let tmp6 = !tmp3;
if (tmp6) {
  let setDunder = module_1294 && typeof module_1294.set === "function";
  if (setDunder) {
    const items = [module_1294.set];
    setDunder = callBindBasic(items);
  }
  if (!setDunder) {
    setDunder = function setDunder(arg0, arg1) {
      if (null == arg0) {
        const self = this;
        const self2 = this;
        const tmp4 = new _mod1293("set Object.prototype.__proto__ called on null or undefined");
        throw tmp4;
      } else {
        arg0.__proto__ = arg1;
        return arg1;
      }
    };
  }
  tmp6 = setDunder;
}

export default tmp6;
