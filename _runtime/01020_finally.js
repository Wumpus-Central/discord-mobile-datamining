// _runtime/01020_finally.js
import noop from "01019_noop.js";

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