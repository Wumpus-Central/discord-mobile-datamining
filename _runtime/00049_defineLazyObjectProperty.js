// _runtime/00049_defineLazyObjectProperty.js
let closure_2;

export default function defineLazyObjectProperty(global, item, get) {
  let closure_0 = global;
  let closure_1 = item;
  get = get.get;
  let tmp = false !== get.enumerable;
  const enumerable = tmp;
  const writable = false !== get.writable;
  let c6 = false;
  let obj = {
    get: function getValue() {
      const tmp = c6;
      if (!tmp) {
        const tmp3 = get();
        closure_2 = tmp3;
        c6 = true;
        const _Object = Object;
        const obj = { value: tmp3, configurable: true, enumerable, writable };
        Object.defineProperty(global, item, obj);
      }
      return closure_2;
    },
    set: function setValue(value) {
      closure_2 = value;
      c6 = true;
      const obj = { value, configurable: true, enumerable, writable };
      Object.defineProperty(global, item, obj);
    },
    configurable: true,
    enumerable: tmp,
  };
  Object.defineProperty(global, item, obj);
}
