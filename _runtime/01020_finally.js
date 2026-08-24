// _runtime/01020_finally.js
import noop from "01019_noop.js";

noop.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((arg0) => {
    const callback = arg0;
    const obj = callback(closure_1_1[0]);
    return callback(closure_1_1[0]).resolve(callback()).then(() => closure_0);
  }, (arg0) => {
    const callback = arg0;
    const obj = callback(closure_1_1[0]);
    return callback(closure_1_1[0]).resolve(callback()).then(() => {
      throw closure_0;
    });
  });
};

export default noop;