// === Module 885: ? ===

// Module 885
import _mod884 from "module_884" /* 884 */;

_mod884.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    return _mod884.resolve(closure_0()).then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return _mod884.resolve(closure_0()).then(() => {
      throw closure_0;
    });
  });
};

export default _mod884;