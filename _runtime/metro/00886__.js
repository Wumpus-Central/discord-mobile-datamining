// _runtime/metro/00886__.js
import noop_mod from "00884__.js";

function valuePromise(_55) {
  const tmp2 = new noop(noop._61);
  tmp2._65 = 1;
  tmp2._55 = _55;
  return tmp2;
}
let noop = noop_mod;
const _module6 = new noop(noop._61);
_module6._65 = 1;
_module6._55 = true;
let noop = noop_mod;
const _module11 = new noop(noop._61);
_module11._65 = 1;
_module11._55 = false;
let noop = noop_mod;
const _module21 = new noop(noop._61);
_module21._65 = 1;
_module21._55 = null;
let noop = noop_mod;
const _module31 = new noop(noop._61);
_module31._65 = 1;
_module31._55 = undefined;
let noop = noop_mod;
const _module41 = new noop(noop._61);
_module41._65 = 1;
_module41._55 = 0;
let noop = noop_mod;
const _module51 = new noop(noop._61);
_module51._65 = 1;
_module51._55 = "";
noop.resolve = (self) => {
  if (self instanceof noop) {
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
        if (typeof then === "function") {
          const tmp4Result1 = new noop(obj.bind(self));
          return tmp4Result1;
        }
        obj = then;
      } catch (tmp14) {
        const require = tmp14;
        const tmp17 = new tmp2(tmp[0])((arg0, fn) => {
          fn(closure_0);
        });
        return tmp17;
      }
    }
    return valuePromise(self);
  }
};
noop.all = (arg0) => {
  const call = slice.call;
  _require = typeof call === "unknown" ? slice() : call(arg0);
  return new require("00884__.js")((fn, arg1) => {
    closure_0 = fn;
    closure_1 = arg1;
    function res(arg0, _65) {
      closure_0 = arg0;
      if (_65) {
        if (typeof _65 === "object") {
          if (_65 instanceof closure_0(dependencyMap[0])) {
            if (_65.then === tmp(dependencyMap[0]).prototype.then) {
              let tmp13 = _65;
              let promise2 = _65;
              if (3 === _65._65) {
                do {
                  let _55 = tmp13._55;
                  tmp13 = _55;
                  promise2 = _55;
                  _65 = _55._65;
                } while (3 === _65);
              }
              if (1 === promise2._65) {
                const tmp18 = res(arg0, promise2._55);
              } else {
                if (2 === promise2._65) {
                  closure_1(promise2._55);
                }
                promise2.then((result) => {
                  res(closure_0, result);
                }, closure_1);
              }
              return tmp18;
            }
          }
          const then = _65.then;
          if (typeof then === "function") {
            const tmpResult1 = new tmp(dependencyMap[0])(then.bind(_65));
            tmpResult1.then((result) => {
              res(closure_0, result);
            }, closure_1);
            const tmpResult = tmp(dependencyMap[0]);
          }
        }
      }
      closure_0[arg0] = _65;
      const diff = length - 1;
      if (0 == diff) {
        closure_0(tmp3);
      }
      length = diff;
    }
    if (0 === closure_0.length) {
      return fn([]);
    } else {
      let length = arr.length;
      let num2 = 0;
      if (0 < arr.length) {
        do {
          let resResult = res(num2, closure_0[num2]);
          num2 = num2 + 1;
          length = closure_0.length;
        } while (num2 < length);
      }
    }
  });
};
noop.reject = (arg0) => {
  closure_0 = arg0;
  return new noop((arg0, fn) => {
    fn(closure_0);
  });
};
noop.race = (arg0) => {
  _require = arg0;
  return new require("00884__.js")((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const item = closure_0.forEach((item) => {
      const obj = closure_0(dependencyMap[0]);
      closure_0(dependencyMap[0]).resolve(item).then(closure_0, closure_1);
    });
  });
};
noop.prototype.catch = function (arg0) {
  return this.then(null, arg0);
};

export default noop;
