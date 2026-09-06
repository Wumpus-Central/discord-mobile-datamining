// _runtime/04676_timeout.js
exports.exports.timeout = (arg0, arg1) => {
  closure_0 = arg1;
  if (typeof closure_0 === "function") {
    const _Error = Error;
    if (typeof call === "unknown") {
      _Error();
    } else {
      call(tmp);
    }
    const _Error2 = Error;
    tmp.stack = Error().stack;
    tmp.message = "Timeout";
    closure_2 = tmp;
    const items = [arg0];
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg1;
      const timeout = setTimeout(() => {
        closure_0(closure_2);
      }, closure_0);
    });
    items[1] = promise;
    return Promise.race(items).then(
      (result) => {
        clearTimeout(closure_1_1);
        return result;
      },
      (arg0) => {
        clearTimeout(closure_1_1);
        throw arg0;
      },
    );
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
class tmp {
  constructor() {
    self = this;
    _Error = Error;
    call = Error.call;
    if (typeof call === "unknown") {
      _ErrorResult = _Error();
    } else {
      callResult = call(self);
    }
    self.stack = Error().stack;
    self.message = "Timeout";
    return;
  }
}
exports.exports.TimeoutError = tmp;
let closure_0 = tmp;
tmp.prototype = Object.create(Error.prototype);
tmp.prototype.name = "TimeoutError";
