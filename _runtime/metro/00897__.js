// _runtime/metro/00897__.js
import Promise_mod from "00895__.js";

const require = globalThis.__r;
let _require;

let Promise;
function valuePromise(_55) {
  const tmp = Promise;
  const tmp2 = new tmp(Promise._61);
  tmp2._65 = 1;
  tmp2._55 = _55;
  return tmp2;
}
Promise = Promise_mod;
const _module6 = new Promise(Promise._61);
_module6._65 = 1;
_module6._55 = true;
Promise = Promise_mod;
const _module11 = new Promise(Promise._61);
_module11._65 = 1;
_module11._55 = false;
Promise = Promise_mod;
const _module21 = new Promise(Promise._61);
_module21._65 = 1;
_module21._55 = null;
Promise = Promise_mod;
const _module31 = new Promise(Promise._61);
_module31._65 = 1;
_module31._55 = undefined;
Promise = Promise_mod;
const _module41 = new Promise(Promise._61);
_module41._65 = 1;
_module41._55 = 0;
Promise = Promise_mod;
const _module51 = new Promise(Promise._61);
_module51._65 = 1;
_module51._55 = "";
Promise.resolve = function (self) {
  if (self instanceof Promise) {
    return self;
  } else if (null === self) {
    return _module21;
  } else if (undefined === self) {
    return _module31;
  } else if (true === self) {
    return _module6;
  } else if (false === self) {
    return _module11;
  } else if (0 === self) {
    return _module41;
  } else if ("" === self) {
    return _module51;
  } else {
    if (typeof self === "object") {
      try {
        const then = self.then;
        const obj = then;
        if (typeof then === "function") {
          self = this;
          const self2 = this;
          const tmpResult = Promise;
          const tmpResult1 = new tmpResult(obj.bind(self));
          return tmpResult1;
        }
      } catch (tmp9) {
        let closure_0 = tmp9;
        const self3 = this;
        const self4 = this;
        const tmp10 = new Promise((arg0, fn) => {
          fn(closure_0);
        });
        return tmp10;
      }
    }
    return valuePromise(self);
  }
};
Promise.all = (arg0) => {
  _require = slice.call(arg0);
  let tmp = new require("00895__.js")((fn, arg1) => {
    closure_0 = fn;
    let closure_1 = arg1;
    function res(arg0, _65) {
      closure_0 = arg0;
      const tmp = _65;
      if (tmp) {
        if (typeof _65 === "object") {
          if (_65 instanceof closure_0(dependencyMap[0])) {
            if (_65.then === closure_0(dependencyMap[0]).prototype.then) {
              let tmp17;
              let tmp12 = _65;
              let promise2 = _65;
              if (3 === _65._65) {
                do {
                  let _55 = tmp12._55;
                  tmp12 = _55;
                  promise2 = _55;
                  _65 = _55._65;
                } while (3 === _65);
              }
              if (1 === promise2._65) {
                tmp17 = res(arg0, promise2._55);
              } else {
                if (2 === promise2._65) {
                  closure_1(promise2._55);
                }
                promise2.then((result) => {
                  res(closure_0, result);
                }, closure_1);
              }
              return tmp17;
            }
          }
          const then = _65.then;
          if (typeof then === "function") {
            const self = this;
            const self2 = this;
            const tmp2Result = closure_0(dependencyMap[0]);
            const tmp2Result1 = new tmp2Result(then.bind(_65));
            tmp2Result1.then((result) => {
              res(closure_0, result);
            }, closure_1);
          }
        }
      }
      closure_0[arg0] = _65;
      const diff = length - 1;
      length = diff;
      if (0 == diff) {
        closure_0(tmp4);
      }
    }
    if (0 === closure_0.length) {
      return fn([]);
    } else {
      let length = arr.length;
      let num2 = 0;
      if (0 < closure_0.length) {
        do {
          let tmp = closure_0;
          let resResult = res(num2, closure_0[num2]);
          num2 = num2 + 1;
          length = closure_0.length;
        } while (num2 < length);
      }
    }
  });
  return tmp;
};
Promise.reject = (arg0) => {
  let closure_0 = arg0;
  const tmp = new Promise((arg0, fn) => {
    fn(closure_0);
  });
  return tmp;
};
Promise.race = (arg0) => {
  _require = arg0;
  const tmp = new require("00895__.js")((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const item = closure_0.forEach((item) => {
      const obj = closure_2_0(closure_2_1[0]);
      const resolveResult = obj.resolve(item);
      resolveResult.then(closure_0, closure_1);
    });
  });
  return tmp;
};
Promise.prototype.catch = function (arg0) {
  return this.then(null, arg0);
};

export default Promise;
