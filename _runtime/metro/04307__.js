// === Module 4307: ? ===

// Module 4307
import _mod4299 from "module_4299" /* 4299 */;

require = arg1;
const dependencyMap = arg6;
const map = new Map();

export const getHybridObjectConstructor = function getHybridObjectConstructor(arg0) {
  closure_0 = arg0;
  let obj = map;
  if (map.has(arg0)) {
    return obj.get(arg0);
  } else {
    function constructorFunc() {
      const NitroModules = _mod4299.NitroModules;
      const hybridObject = NitroModules.createHybridObject(closure_0);
      const prototypeOf = Object.getPrototypeOf(hybridObject);
      if (constructorFunc.prototype !== prototypeOf) {
        constructorFunc.prototype = prototypeOf;
        constructorFunc.prototypeInitialized = true;
      }
      return hybridObject;
    }
    constructorFunc.prototypeInitialized = false;
    let _Object = Object;
    const _Symbol = Symbol;
    obj = {
      value(arg0) {
          if (!constructorFunc.prototypeInitialized) {
            const NitroModules = _mod4299.NitroModules;
            const _Object = Object;
            constructorFunc.prototype = Object.getPrototypeOf(NitroModules.createHybridObject(closure_0));
            constructorFunc.prototypeInitialized = true;
          }
          let prototypeOf = Object.getPrototypeOf(arg0);
          if (null != prototypeOf) {
            while (prototypeOf !== constructorFunc.prototype) {
              let _Object2 = Object;
              prototypeOf = Object.getPrototypeOf(prototypeOf);
            }
            return true;
          }
          return false;
        }
    };
    Object.defineProperty(constructorFunc, Symbol.hasInstance, obj);
    const result = obj.set(arg0, constructorFunc);
    return constructorFunc;
  }
};