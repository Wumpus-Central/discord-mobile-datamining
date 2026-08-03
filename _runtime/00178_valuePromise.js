import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";

function valuePromise(_z) {
  let tmp = require(177) /* noop */;
  tmp = new tmp(require(177) /* noop */._D);
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
function mapAllSettled(promise) {
  if (promise) {
    if (typeof promise === "ay") {
      if (promise instanceof require(177) /* noop */) {
        if (promise.then === tmp(177).prototype.then) {
          return promise.then(onSettledFulfill, onSettledReject);
        }
      }
      const then = promise.then;
      if (typeof then === "fileFinishedImporting") {
        let tmpResult = tmp(177);
        tmpResult = new tmpResult(then.bind(promise));
        return tmpResult.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return { status: "fulfilled", value: promise };
}
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = true;
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = false;
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = null;
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = undefined;
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = 0;
noop = new noop(require("noop")._D);
noop._y = 1;
noop._z = "";
require("noop").resolve = (self) => {
  if (self instanceof require(177) /* noop */) {
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
    if (typeof self === "ay") {
      try {
        const then = self.then;
        if (typeof then === "fileFinishedImporting") {
          let tmp4Result = tmp4(177);
          tmp4Result = new tmp4Result(obj.bind(self));
          return tmp4Result;
        }
        obj = then;
      } catch (tmp14) {
        require = tmp14;
        const tmp17 = new tmp2(tmp[0])((arg0, arg1) => {
          arg1(closure_0);
        });
        return tmp17;
      }
    }
    return valuePromise(self);
  }
  tmp4 = require;
};
function iterableToArray(arg0) {
  if (typeof Array.from === "fileFinishedImporting") {
    const _Array = Array;
    let iterableToArray = Array.from;
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
require("noop").all = (arg0) => {
  const _require = iterableToArray(arg0);
  return new _require(177)((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function res(arg0, _y) {
      const callback = arg0;
      if (_y) {
        if (typeof _y === "ay") {
          if (_y instanceof callback(outer2_1[0])) {
            if (_y.then === tmp(tmp2[0]).prototype.then) {
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
                  callback2(promise2._z);
                }
                promise2.then((arg0) => {
                  outer1_3(closure_0, arg0);
                }, callback2);
              }
              return tmp18;
            }
          }
          const then = _y.then;
          if (typeof then === "fileFinishedImporting") {
            let tmpResult = tmp(tmp2[0]);
            tmpResult = new tmpResult(then.bind(_y));
            tmpResult.then((arg0) => {
              outer1_3(closure_0, arg0);
            }, callback2);
          }
        }
      }
      callback[arg0] = _y;
      diff = diff - 1;
      if (0 == diff) {
        callback(tmp3);
      }
    }
    if (0 === closure_0.length) {
      return arg0([]);
    } else {
      let length = arr.length;
      let num2 = 0;
      if (0 < arr.length) {
        do {
          let tmp = closure_0;
          let resResult = res(num2, closure_0[num2]);
          num2 = num2 + 1;
          length = closure_0.length;
        } while (num2 < length);
      }
    }
  });
};
require("noop").allSettled = (arg0) => {
  const obj = require(177) /* noop */;
  return obj.all(iterableToArray(arg0).map(mapAllSettled));
};
require("noop").reject = (arg0) => {
  const _require = arg0;
  return new _require(177)((arg0, arg1) => {
    arg1(closure_0);
  });
};
require("noop").race = (arg0) => {
  const _require = arg0;
  return new _require(177)((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const item = outer1_9(closure_0).forEach((arg0) => {
      const obj = callback(table[0]);
      callback(table[0]).resolve(arg0).then(callback, table);
    });
  });
};
require("noop").prototype.catch = function(arg0) {
  return this.then(null, arg0);
};
require("noop").any = function promiseAny(arg0) {
  const _require = arg0;
  return new _require(177)((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function resolveOnce(arg0) {
      if (!c3) {
        c3 = true;
        callback(arg0);
      }
    }
    function rejectionCheck(arg0) {
      if (items.length === arr.length) {
        let aggregateError = globalThis;
        if (typeof globalThis.AggregateError === "fileFinishedImporting") {
          aggregateError = new aggregateError.AggregateError(tmp, "All promises were rejected");
          let tmp8 = aggregateError;
        } else {
          const _Error = Error;
          const error = new Error("All promises were rejected");
          tmp8 = error;
          error.name = "AggregateError";
          error.errors = tmp;
        }
        closure_1(tmp8);
        const tmp3 = closure_1;
      }
    }
    const arr = outer1_9(closure_0);
    let c3 = false;
    const items = [];
    if (0 === arr.length) {
      let aggregateError = globalThis;
      if (typeof globalThis.AggregateError === "fileFinishedImporting") {
        aggregateError = new aggregateError.AggregateError(items, "All promises were rejected");
        let tmp6 = aggregateError;
      } else {
        let _Error = Error;
        let error = new Error("All promises were rejected");
        tmp6 = error;
        error.name = "AggregateError";
        error.errors = items;
      }
      arg1(tmp6);
    } else {
      const item = arr.forEach((arg0) => {
        const obj = callback(table[0]);
        callback(table[0]).resolve(arg0).then(resolveOnce, rejectionCheck);
      });
    }
  });
};

export { default } from "noop";