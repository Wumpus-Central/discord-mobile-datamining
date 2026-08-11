// _runtime/04055_map.js
const require = arg1;
const dependencyMap = arg6;
const map = new Map();
arg5.getHybridObjectConstructor = function getHybridObjectConstructor(arg0) {
  let closure_0 = arg0;
  let obj = map;
  if (map.has(arg0)) {
    return obj.get(arg0);
  } else {
    function constructorFunc() {
      const NitroModules = callback(constructorFunc[0]).NitroModules;
      const hybridObject = NitroModules.createHybridObject(callback);
      const prototypeOf = Object.getPrototypeOf(hybridObject);
      if (constructorFunc.prototype !== prototypeOf) {
        tmp3.prototype = prototypeOf;
        tmp3.prototypeInitialized = true;
      }
      return hybridObject;
    }
    constructorFunc.prototypeInitialized = false;
    let _Object = Object;
    const _Symbol = Symbol;
    obj = { value: null };
    obj[0] = function value(arg0) {
      if (!constructorFunc.prototypeInitialized) {
        const NitroModules = callback(constructorFunc[0]).NitroModules;
        const _Object = Object;
        tmp.prototype = Object.getPrototypeOf(NitroModules.createHybridObject(callback));
        tmp.prototypeInitialized = true;
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
    };
    Object.defineProperty(constructorFunc, Symbol.hasInstance, obj);
    const result = obj.set(arg0, constructorFunc);
    return constructorFunc;
  }
};