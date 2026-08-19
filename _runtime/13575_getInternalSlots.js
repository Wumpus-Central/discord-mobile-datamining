// === Module 13575: getInternalSlots ===

// Module 13575 (getInternalSlots)
arg5.default = function getInternalSlots(arg0) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let obj = weakMap;
  let value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    obj = Object.create(null, items.reduce((acc, item, index) => {
      acc[item] = { enumerable: false, writable: true, configurable: true };
      return acc;
    }, {}));
    const result = obj.set(arg0, obj);
    value = obj;
  }
  return value;
};
const weakMap = new WeakMap();