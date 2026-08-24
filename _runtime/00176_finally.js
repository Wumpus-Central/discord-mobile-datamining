// === Module 176: finally ===

// Module 176 (finally)
import noop from "noop" /* 177 */;

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