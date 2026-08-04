exports.exports.timeout = (arg0, arg1) => {
  let closure_0 = arg1;
  if (typeof closure_0 !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const _Error = Error;
  if (typeof call === "unknown") {
    _Error();
  } else {
    call(tmp);
  }
  new.target.stack = Error().stack;
  new.target.message = "Timeout";
  let closure_2 = tmp;
  const items = [
    arg0,
    new Promise((arg0, arg1) => {
      let closure_0 = arg1;
      const timeout = setTimeout(() => {
        callback(outer1_2);
      }, closure_0);
    })
  ];
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg1;
    const timeout = setTimeout(() => {
      callback(outer1_2);
    }, closure_0);
  });
  return Promise.race(items).then((arg0) => {
    clearTimeout(closure_1);
    return arg0;
  }, (arg0) => {
    clearTimeout(closure_1);
    throw arg0;
  });
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
let c0 = tmp;
tmp.prototype = Object.create(Error.prototype);
tmp.prototype.name = "TimeoutError";