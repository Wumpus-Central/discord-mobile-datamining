// === Module 7571: ? ===

// Module 7571

export function debounce(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return function() {
    let closure_2;
    let timeout;
    const self = this;
    closure_0 = [...arguments];
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      closure_0.apply(self, closure_0);
    }, self);
  };
}