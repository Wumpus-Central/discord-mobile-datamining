// _runtime/00883_done.js
import _mod884 from "metro/00884__.js";

_mod884.prototype.done = function (arg0, arg1) {
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

export default _mod884;
