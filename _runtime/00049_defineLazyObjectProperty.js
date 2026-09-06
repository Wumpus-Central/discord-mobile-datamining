// === Module 49: defineLazyObjectProperty ===

// Module 49 (defineLazyObjectProperty)

export default function defineLazyObjectProperty(arg0, arg1, get) {
  closure_0 = arg0;
  closure_1 = arg1;
  get = get.get;
  const enumerable = tmp;
  const writable = false !== get.writable;
  c6 = false;
  Object.defineProperty(arg0, arg1, {
    get: function getValue() {
      if (!c6) {
        const tmp2 = get();
        closure_2 = tmp2;
        c6 = true;
        const _Object = Object;
        const obj = { value: tmp2, configurable: true, enumerable, writable };
        Object.defineProperty(closure_0, closure_1, obj);
      }
      return closure_2;
    },
    set: function setValue(value) {
      closure_2 = value;
      c6 = true;
      Object.defineProperty(closure_0, closure_1, { value, configurable: true, enumerable, writable });
    },
    configurable: true,
    enumerable: false !== get.enumerable
  });
};