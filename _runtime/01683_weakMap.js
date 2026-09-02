// === Module 1683: weakMap ===

// Module 1683 (weakMap)
import isJest from "isJest" /* 1655 */;

isJest = isJest.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let c0 = SymbolResult;
let weakMap = null;
if (!isJest) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (isJest) {
  obj[0] = function set() {

  };
  obj[1] = function get() {
    return null;
  };
  let tmp7 = obj;
} else {
  obj[0] = function set(arg0, arg1) {
    let tmp = arg1;
    if (!arg1) {
      tmp = closure_0;
    }
    const result = weakMap.set(arg0, tmp);
  };
  const get = weakMap.get;
  obj[1] = get.bind(weakMap);
  tmp7 = obj;
}

export const shareableMappingFlag = SymbolResult;
export const shareableMappingCache = tmp7;