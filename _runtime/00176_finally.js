// === Module 176: finally ===

// Module 176 (finally)
import _mod177 from "module_177" /* 177 */;

_mod177.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    return _mod177.resolve(closure_0()).then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return _mod177.resolve(closure_0()).then(() => {
      throw closure_0;
    });
  });
};

export default _mod177;