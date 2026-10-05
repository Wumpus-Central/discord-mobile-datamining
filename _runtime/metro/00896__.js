// _runtime/metro/00896__.js
import _mod895 from "00895__.js";

_mod895.prototype.finally = function (arg0) {
  let closure_0 = arg0;
  return this.then(
    (result) => {
      closure_0 = result;
      const obj = _mod895;
      const resolveResult = obj.resolve(closure_0());
      return resolveResult.then(() => closure_0);
    },
    (arg0) => {
      closure_0 = arg0;
      const obj = _mod895;
      const resolveResult = obj.resolve(closure_0());
      return resolveResult.then(() => {
        throw closure_0;
      });
    },
  );
};

export default _mod895;
