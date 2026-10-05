// === Module 5007: ? ===

// Module 5007
module.exports.timeout = function(arg0, arg1) {
  const f89886 = (arg0, arg1) => {
    let closure_1;
    closure_0 = arg1;
    const timeout = setTimeout(() => {
      closure_0(self);
    }, closure_0);
  };
  let closure_0 = arg1;
  const self = this;
  if (typeof tmp === "function") {
    Error.call(self);
    const _Error = Error;
    self.stack = Error().stack;
    self.message = "Timeout";
    const items = [arg0, ];
    const self2 = this;
    const self3 = this;
    items[1] = new Promise(f89886);
    const promise = new Promise(f89886);
    const raceResult = race(items);
    return raceResult.then((result) => {
      clearTimeout(closure_1_1);
      return result;
    }, (arg0) => {
      clearTimeout(closure_1_1);
      throw arg0;
    });
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
class tmp {
  constructor() {
    const self = this;
    Error.call(self);
    self.stack = Error().stack;
    self.message = "Timeout";
  }
}
module.exports.TimeoutError = tmp;
tmp.prototype = Object.create(Error.prototype);
tmp.prototype.name = "TimeoutError";