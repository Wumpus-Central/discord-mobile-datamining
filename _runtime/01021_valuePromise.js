// _runtime/01021_valuePromise.js
import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";
import noop from "noop";
import { noop } from "01019_noop.js";

function valuePromise(_55) {
  let tmp = noop /* noop */;
  tmp = new tmp(noop /* noop */._61);
  tmp._65 = 1;
  tmp._55 = _55;
  return tmp;
}
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = true;
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = false;
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = null;
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = undefined;
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = 0;
noop = new noop(require("noop")._61);
noop._65 = 1;
noop._55 = "";
require("noop").resolve = (self) => {
  if (self instanceof noop /* noop */) {
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
          let tmp4Result = tmp4(1019);
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
require("noop").all = (arg0) => {
  const call = slice.call;
  const _require = typeof call === "unknown" ? slice() : call(arg0);
  return new _noop((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function res(arg0, self) {
      let _65;
      const callback = arg0;
      if (self) {
        if (typeof self === "object") {
          if (self instanceof callback(outer2_1[0])) {
            if (self.then === tmp(tmp2[0]).prototype.then) {
              let tmp13 = self;
              let promise2 = self;
              if (3 === self._65) {
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
                  callback2(promise2._55);
                }
                promise2.then((arg0) => {
                  outer1_3(closure_0, arg0);
                }, callback2);
              }
              return tmp18;
            }
          }
          const then = self.then;
          if (typeof then === "function") {
            let tmpResult = tmp(tmp2[0]);
            tmpResult = new tmpResult(then.bind(self));
            tmpResult.then((arg0) => {
              outer1_3(closure_0, arg0);
            }, callback2);
          }
        }
      }
      callback[arg0] = self;
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
require("noop").reject = (arg0) => {
  const _require = arg0;
  return new _noop((arg0, arg1) => {
    arg1(closure_0);
  });
};
require("noop").race = (arg0) => {
  const _require = arg0;
  return new _noop((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const item = closure_0.forEach((arg0) => {
      const obj = callback(table[0]);
      callback(table[0]).resolve(arg0).then(callback, table);
    });
  });
};
require("noop").prototype.catch = function(arg0) {
  return this.then(null, arg0);
};

export { default } from "noop";