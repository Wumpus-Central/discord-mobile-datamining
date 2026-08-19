// === Module 176: finally ===

// Module 176 (finally)
import noop from "noop" /* 177 */;

noop.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((result) => {
    const callback = result;
    const obj = callback(dependencyMap[0]);
    return callback(dependencyMap[0]).resolve(callback()).then((result) => closure_0);
  }, (arg0) => {
    const callback = arg0;
    const obj = callback(dependencyMap[0]);
    return callback(dependencyMap[0]).resolve(callback()).then((result) => {
      throw closure_0;
    });
  });
};

export default noop;