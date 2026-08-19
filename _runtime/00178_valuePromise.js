// _runtime/00178_valuePromise.js
import noop from "00177_noop.js";
import { noop } from "00177_noop.js";

function valuePromise(_z) {
  let tmp = noop;
  tmp = new tmp(noop._D);
  tmp._y = 1;
  tmp._z = _z;
  return tmp;
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
        let tmpResult = noop;
        tmpResult = new tmpResult(then.bind(value));
        return tmpResult.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return { status: "fulfilled", value };
}
noop = new noop(noop._D);
noop._y = 1;
noop._z = true;
noop = new noop(noop._D);
noop._y = 1;
noop._z = false;
noop = new noop(noop._D);
noop._y = 1;
noop._z = null;
noop = new noop(noop._D);
noop._y = 1;
noop._z = undefined;
noop = new noop(noop._D);
noop._y = 1;
noop._z = 0;
noop = new noop(noop._D);
noop._y = 1;
noop._z = "";
noop.resolve = (self) => {
  if (self instanceof noop) {
    return self;
  } else if (null === self) {
    return noop;
  } else if (undefined === self) {
    return noop;
  } else if (true === self) {
    return noop;
  } else if (false === self) {
    return noop;
  } else if (0 === self) {
    return noop;
  } else if ("" === self) {
    return noop;
  } else {
    if (typeof self === "object") {
      try {
        const then = self.then;
        if (typeof then === "function") {
          let tmp4Result = noop;
          tmp4Result = new tmp4Result(obj.bind(self));
          return tmp4Result;
        }
        obj = then;
      } catch (tmp14) {
        require = tmp14;
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
  const _require = iterableToArray(arg0);
  return new noop((fn) => {
    closure_0 = fn;
    closure_1 = arg1;
    function res(arg0, closure_0) {
      let _y;
      const callback = arg0;
      if (closure_0) {
        if (typeof closure_0 === "object") {
          if (closure_0 instanceof callback(dependencyMap[0])) {
            if (closure_0.then === tmp(dependencyMap[0]).prototype.then) {
              let tmp13 = closure_0;
              let promise2 = closure_0;
              if (3 === closure_0._y) {
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
                  callback2(promise2._z);
                }
                promise2.then((result) => {
                  res(closure_0, result);
                }, callback2);
              }
              return tmp18;
            }
          }
          const then = closure_0.then;
          if (typeof then === "function") {
            let tmpResult = tmp(dependencyMap[0]);
            tmpResult = new tmpResult(then.bind(closure_0));
            tmpResult.then((result) => {
              res(closure_0, result);
            }, callback2);
          }
        }
      }
      callback[arg0] = closure_0;
      const diff = length - 1;
      if (0 == diff) {
        callback(tmp3);
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
  const _require = arg0;
  return new noop((arg0, fn) => {
    fn(closure_0);
  });
};
noop.race = (arg0) => {
  const _require = arg0;
  return new noop((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const item = iterableToArray(closure_0).forEach((item, index) => {
      const obj = callback(table[0]);
      callback(table[0]).resolve(item).then(callback, table);
    });
  });
};
noop.prototype.catch = function(arg0) {
  return this.then(null, arg0);
};
noop.any = function promiseAny(arg0) {
  const _require = arg0;
  return new noop((arg0, fn) => {
    closure_0 = arg0;
    closure_1 = fn;
    function resolveOnce(arg0) {
      if (!c3) {
        c3 = true;
        callback(arg0);
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
          error = new Error("All promises were rejected");
          tmp8 = error;
          error.name = "AggregateError";
          error.errors = items;
        }
        callback(tmp8);
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
        error = new Error("All promises were rejected");
        tmp6 = error;
        error.name = "AggregateError";
        error.errors = items;
      }
      fn(tmp6);
    } else {
      const item = arr.forEach((item, index) => {
        const obj = callback(table[0]);
        callback(table[0]).resolve(item).then(resolveOnce, rejectionCheck);
      });
    }
  });
};

export default noop;