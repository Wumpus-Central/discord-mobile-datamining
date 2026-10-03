// === Module 896: ? ===

// Module 896
import _mod895 from "module_895" /* 895 */;

_mod895.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    return _mod895.resolve(closure_0()).then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return _mod895.resolve(closure_0()).then(() => {
      throw closure_0;
    });
  });
};

export default _mod895;