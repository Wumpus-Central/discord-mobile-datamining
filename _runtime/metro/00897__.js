// _runtime/metro/00897__.js
import _mod896 from "00896__.js";

_mod896.prototype.finally = function (arg0) {
  closure_0 = arg0;
  return this.then(
    (result) => {
      closure_0 = result;
      return _mod896.resolve(closure_0()).then(() => closure_0);
    },
    (arg0) => {
      closure_0 = arg0;
      return _mod896.resolve(closure_0()).then(() => {
        throw closure_0;
      });
    },
  );
};

export default _mod896;
