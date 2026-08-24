// _runtime/00049_defineLazyObjectProperty.js
arg5.default = function defineLazyObjectProperty(arg0, arg1, get) {
  closure_0 = arg0;
  closure_1 = arg1;
  get = get.get;
  closure_4 = tmp;
  closure_5 = false !== get.writable;
  c6 = false;
  Object.defineProperty(arg0, arg1, {
    get: function getValue() {
      if (!c6) {
        c6 = true;
        const tmp2 = get();
        closure_2 = tmp2;
        c6 = true;
        const _Object = Object;
        const obj = { value: null, configurable: true, enumerable: null, writable: null };
        obj[0] = tmp2;
        obj[2] = closure_4;
        obj[3] = closure_5;
        Object.defineProperty(closure_0, closure_1, obj);
      }
      return closure_2;
    },
    set: function setValue(value) {
      closure_2 = value;
      c6 = true;
      Object.defineProperty(closure_0, closure_1, { value, configurable: true, enumerable: closure_4, writable: closure_5 });
    },
    configurable: true,
    enumerable: false !== get.enumerable
  });
};