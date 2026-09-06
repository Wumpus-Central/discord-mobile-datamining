// _runtime/metro/07916__.js

export function debounce(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return function () {
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      closure_0.apply(self, closure_0);
    }, self);
  };
}
