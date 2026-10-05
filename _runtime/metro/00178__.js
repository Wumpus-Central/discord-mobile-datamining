// === Module 178: ? ===

// Module 178
import Promise_mod from "module_177" /* 177 */;

const require = globalThis.__r;
let _require;

let Promise;
function valuePromise(_z) {
  const tmp = Promise;
  const tmp2 = new tmp(Promise._D);
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
  const tmp = value;
  if (tmp) {
    if (typeof value === "object") {
      if (value instanceof Promise) {
        if (value.then === Promise.prototype.then) {
          return value.then(onSettledFulfill, onSettledReject);
        }
      }
      const then = value.then;
      if (typeof then === "function") {
        const self = this;
        const self2 = this;
        const tmp2Result = Promise;
        const tmp2Result1 = new tmp2Result(then.bind(value));
        return tmp2Result1.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return { status: "fulfilled", value };
}
Promise = Promise_mod;
const _module6 = new Promise(Promise._D);
_module6._y = 1;
_module6._z = true;
Promise = Promise_mod;
const _module11 = new Promise(Promise._D);
_module11._y = 1;
_module11._z = false;
Promise = Promise_mod;
const _module21 = new Promise(Promise._D);
_module21._y = 1;
_module21._z = null;
Promise = Promise_mod;
const _module31 = new Promise(Promise._D);
_module31._y = 1;
_module31._z = undefined;
Promise = Promise_mod;
const _module41 = new Promise(Promise._D);
_module41._y = 1;
_module41._z = 0;
Promise = Promise_mod;
const _module51 = new Promise(Promise._D);
_module51._y = 1;
_module51._z = "";
Promise.resolve = function(self) {
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
function iterableToArray(arg0) {
  let callResult;
  if (typeof Array.from === "function") {
    const _Array = Array;
    iterableToArray = Array.from;
    const _Array2 = Array;
    callResult = Array.from(arg0);
  } else {
    iterableToArray = function iterableToArray(arg0) {
      return slice.call(arg0);
    };
    const _Array3 = Array;
    callResult = slice.call(arg0);
  }
  return callResult;
}
Promise.all = (arg0) => {
  _require = iterableToArray(arg0);
  let tmp = new require("module_177")((fn, arg1) => {
    closure_0 = fn;
    let closure_1 = arg1;
    function res(arg0, _y) {
      closure_0 = arg0;
      const tmp = _y;
      if (tmp) {
        if (typeof _y === "object") {
          if (_y instanceof closure_0(dependencyMap[0])) {
            if (_y.then === closure_0(dependencyMap[0]).prototype.then) {
              let tmp17;
              let tmp12 = _y;
              let promise2 = _y;
              if (3 === _y._y) {
                do {
                  let _z = tmp12._z;
                  tmp12 = _z;
                  promise2 = _z;
                  _y = _z._y;
                } while (3 === _y);
              }
              if (1 === promise2._y) {
                tmp17 = res(arg0, promise2._z);
              } else {
                if (2 === promise2._y) {
                  closure_1(promise2._z);
                }
                promise2.then((result) => {
                  res(closure_0, result);
                }, closure_1);
              }
              return tmp17;
            }
          }
          const then = _y.then;
          if (typeof then === "function") {
            const self = this;
            const self2 = this;
            const tmp2Result = closure_0(dependencyMap[0]);
            const tmp2Result1 = new tmp2Result(then.bind(_y));
            tmp2Result1.then((result) => {
              res(closure_0, result);
            }, closure_1);
          }
        }
      }
      closure_0[arg0] = _y;
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
Promise.allSettled = (arg0) => {
  const all = Promise.all;
  Promise;
  const arr = iterableToArray(arg0);
  return all(arr.map(mapAllSettled));
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
  const tmp = new require("module_177")((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const arr = iterableToArray(closure_0);
    const item = arr.forEach((item) => {
      const obj = closure_2_0(closure_2_1[0]);
      const resolveResult = obj.resolve(item);
      resolveResult.then(closure_0, closure_1);
    });
  });
  return tmp;
};
Promise.prototype.catch = function(arg0) {
  return this.then(null, arg0);
};
Promise.any = function promiseAny(arg0) {
  _require = arg0;
  let tmp = new require("module_177")(function(arg0, fn) {
    closure_0 = arg0;
    let closure_1 = fn;
    function resolveOnce(arg0) {
      const tmp = c3;
      if (!tmp) {
        c3 = true;
        closure_0(arg0);
      }
    }
    function rejectionCheck(arg0) {
      arr = items.push(arg0);
      if (items.length === arr.length) {
        let aggregateError;
        if (typeof globalThis.AggregateError === "function") {
          const AggregateError2 = globalThis.AggregateError;
          const self = this;
          const self2 = this;
          aggregateError = new globalThis.AggregateError(items, "All promises were rejected");
        } else {
          const _Error = Error;
          const self3 = this;
          const self4 = this;
          const error = new Error("All promises were rejected");
          aggregateError = error;
          error.name = "AggregateError";
          error.errors = items;
        }
        closure_1(aggregateError);
      }
    }
    let arr = iterableToArray(closure_0);
    let c3 = false;
    const items = [];
    if (0 === arr.length) {
      let aggregateError;
      if (typeof globalThis.AggregateError === "function") {
        let AggregateError2 = globalThis.AggregateError;
        let self = this;
        let self2 = this;
        aggregateError = new globalThis.AggregateError(items, "All promises were rejected");
      } else {
        let _Error = Error;
        let self3 = this;
        let self4 = this;
        let error = new Error("All promises were rejected");
        aggregateError = error;
        error.name = "AggregateError";
        error.errors = items;
      }
      fn(aggregateError);
    } else {
      const item = arr.forEach((item) => {
        const obj = closure_2_0(closure_2_1[0]);
        const resolveResult = obj.resolve(item);
        resolveResult.then(resolveOnce, rejectionCheck);
      });
    }
  });
  return tmp;
};

export default Promise;