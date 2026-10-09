// === Module 1687: ? ===

// Module 1687
import module_1659_mod from "module_1659" /* 1659 */;

let module_1659 = module_1659_mod;
module_1659 = module_1659.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let weakMap = null;
if (!module_1659) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1659) {
  obj.set = function set() {

  };
  obj.get = function get() {
    return null;
  };
  let tmp7 = obj;
} else {
  obj.set = function set(arg0, arg1) {
    let tmp = arg1;
    if (!arg1) {
      tmp = SymbolResult;
    }
    const result = weakMap.set(arg0, tmp);
  };
  const get = weakMap.get;
  obj.get = get.bind(weakMap);
  tmp7 = obj;
}

export const shareableMappingFlag = SymbolResult;
export const shareableMappingCache = tmp7;