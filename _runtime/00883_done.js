// === Module 883: done ===

// Module 883 (done)
import noop from "noop" /* 884 */;

noop.prototype.done = function(arg0, arg1) {
  const self = this;
  let self2 = this;
  if (arguments.length) {
    const then = self.then;
    self2 = then(...arguments);
  }
  self2.then(null, (arg0) => {
    closure_0 = arg0;
    const timerId = setTimeout(() => {
      throw closure_0;
    }, 0);
  });
};

export default noop;