// === Module 176: ? ===

// Module 176
import _mod177 from "module_177" /* 177 */;

_mod177.prototype.finally = function(arg0) {
  let closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    const obj = _mod177;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    const obj = _mod177;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => {
      throw closure_0;
    });
  });
};

export default _mod177;