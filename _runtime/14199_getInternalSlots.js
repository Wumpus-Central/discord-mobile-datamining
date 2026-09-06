// === Module 14199: getInternalSlots ===

// Module 14199 (getInternalSlots)
arg5.default = function getInternalSlots(arg0) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let obj = weakMap;
  let value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    obj = Object.create(null, items.reduce((arg0, arg1) => {
      arg0[arg1] = { enumerable: false, writable: true, configurable: true };
      return arg0;
    }, {}));
    const result = obj.set(arg0, obj);
    value = obj;
  }
  return value;
};
const weakMap = new WeakMap();