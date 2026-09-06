// _runtime/metro/01667__.js
import 01639__ from "01639__.js";

module_1639 = module_1639.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let weakMap = null;
if (!module_1639) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1639) {
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