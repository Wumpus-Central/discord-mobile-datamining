// === Module 1674: ? ===

// Module 1674
import module_1646_mod from "module_1646" /* 1646 */;

let module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let weakMap = null;
if (!module_1646) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1646) {
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