// _runtime/metro/00178__.js
import noop_mod from "00177__.js";

function valuePromise(_z) {
  const tmp2 = new noop(noop._D);
  tmp2._y = 1;
  tmp2._z = _z;
  return tmp2;
}
function onSettledFulfill(value) {
  return { status: "fulfilled", value };
}
function onSettledReject(reason) {
  return { status: "rejected", reason };
}
function mapAllSettled(value) {
  if (value) {
    if (typeof value === "object") {
      if (value instanceof noop) {
        if (value.then === noop.prototype.then) {
          return value.then(onSettledFulfill, onSettledReject);
        }
      }
      const then = value.then;
      if (typeof then === "function") {
        const tmpResult1 = new noop(then.bind(value));
        return tmpResult1.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return { status: "fulfilled", value };
}
let noop = noop_mod;
const _module6 = new noop(noop._D);
_module6._y = 1;
_module6._z = true;
let noop = noop_mod;
const _module11 = new noop(noop._D);
_module11._y = 1;
_module11._z = false;
let noop = noop_mod;
const _module21 = new noop(noop._D);
_module21._y = 1;
_module21._z = null;
let noop = noop_mod;
const _module31 = new noop(noop._D);
_module31._y = 1;
_module31._z = undefined;
let noop = noop_mod;
const _module41 = new noop(noop._D);
_module41._y = 1;
_module41._z = 0;
let noop = noop_mod;
const _module51 = new noop(noop._D);
_module51._y = 1;
_module51._z = "";
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
function iterableToArray(arg0) {
  if (typeof Array.from === "function") {
    const _Array = Array;
    iterableToArray = Array.from;
    const _Array2 = Array;
    let arr = Array.from(arg0);
  } else {
    iterableToArray = function iterableToArray(arg0) {
      const call = slice.call;
      return typeof call === "unknown" ? slice() : call(arg0);
    };
    const _Array3 = Array;
    let call = slice.call;
    arr = typeof call === "unknown" ? slice() : call(arg0);
  }
  return arr;
}
noop.all = (arg0) => {
  _require = iterableToArray(arg0);
  return new require("00177__.js")((fn, arg1) => {
    closure_0 = fn;
    closure_1 = arg1;
    function res(arg0, _y) {
      closure_0 = arg0;
      if (_y) {
        if (typeof _y === "object") {
          if (_y instanceof closure_0(dependencyMap[0])) {
            if (_y.then === tmp(dependencyMap[0]).prototype.then) {
              let tmp13 = _y;
              let promise2 = _y;
              if (3 === _y._y) {
                do {
                  let _z = tmp13._z;
                  tmp13 = _z;
                  promise2 = _z;
                  _y = _z._y;
                } while (3 === _y);
              }
              if (1 === promise2._y) {
                const tmp18 = res(arg0, promise2._z);
              } else {
                if (2 === promise2._y) {
                  closure_1(promise2._z);
                }
                promise2.then((result) => {
                  res(closure_0, result);
                }, closure_1);
              }
              return tmp18;
            }
          }
          const then = _y.then;
          if (typeof then === "function") {
            const tmpResult1 = new tmp(dependencyMap[0])(then.bind(_y));
            tmpResult1.then((result) => {
              res(closure_0, result);
            }, closure_1);
            const tmpResult = tmp(dependencyMap[0]);
          }
        }
      }
      closure_0[arg0] = _y;
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
noop.allSettled = (arg0) => {
  const obj = noop;
  return obj.all(iterableToArray(arg0).map(mapAllSettled));
};
noop.reject = (arg0) => {
  closure_0 = arg0;
  return new noop((arg0, fn) => {
    fn(closure_0);
  });
};
noop.race = (arg0) => {
  _require = arg0;
  return new require("00177__.js")((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const item = iterableToArray(closure_0).forEach((item) => {
      const obj = closure_0(dependencyMap[0]);
      closure_0(dependencyMap[0]).resolve(item).then(closure_0, closure_1);
    });
  });
};
noop.prototype.catch = function (arg0) {
  return this.then(null, arg0);
};
noop.any = function promiseAny(arg0) {
  _require = arg0;
  return new require("00177__.js")((arg0, fn) => {
    closure_0 = arg0;
    closure_1 = fn;
    function resolveOnce(arg0) {
      if (!c3) {
        c3 = true;
        closure_0(arg0);
      }
    }
    function rejectionCheck(arg0) {
      if (items.length === arr.length) {
        let aggregateError = globalThis;
        if (typeof globalThis.AggregateError === "function") {
          aggregateError = new aggregateError.AggregateError(items, "All promises were rejected");
          let tmp8 = aggregateError;
        } else {
          const _Error = Error;
          const error = new Error("All promises were rejected");
          tmp8 = error;
          error.name = "AggregateError";
          error.errors = items;
        }
        closure_1(tmp8);
      }
      arr = items.push(arg0);
    }
    let arr = iterableToArray(closure_0);
    c3 = false;
    const items = [];
    if (0 === arr.length) {
      let aggregateError = globalThis;
      if (typeof globalThis.AggregateError === "function") {
        aggregateError = new aggregateError.AggregateError(items, "All promises were rejected");
        let tmp6 = aggregateError;
      } else {
        let _Error = Error;
        let error = new Error("All promises were rejected");
        tmp6 = error;
        error.name = "AggregateError";
        error.errors = items;
      }
      fn(tmp6);
    } else {
      const item = arr.forEach((item) => {
        const obj = closure_0(dependencyMap[0]);
        closure_0(dependencyMap[0]).resolve(item).then(resolveOnce, rejectionCheck);
      });
    }
  });
};

export default noop;
