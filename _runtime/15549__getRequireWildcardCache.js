// _runtime/15549__getRequireWildcardCache.js
import _mod45 from "metro/00045__.js";

function _getRequireWildcardCache(arg0) {
  if (typeof WeakMap !== "function") {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    let tmp = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    };
    if (arg0) {
      tmp = weakMap1;
    }
    return tmp;
  }
}
