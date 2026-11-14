// === Module 1720: ? ===

// Module 1720
const SymbolResult = Symbol("serializable flag");
const weakMap = new WeakMap();
const obj = {
  set(arg0, arg1) {
    let tmp = arg1;
    if (!arg1) {
      tmp = SymbolResult;
    }
    const result = weakMap.set(arg0, tmp);
  },
  get: null
};
const get = weakMap.get;
obj.get = get.bind(weakMap);

export const serializableMappingFlag = SymbolResult;
export const serializableMappingCache = obj;