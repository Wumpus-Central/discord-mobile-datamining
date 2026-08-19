// === Module 1021: valuePromise ===

// Module 1021 (valuePromise)
import noop from "noop" /* 1019 */;

function valuePromise(_55) {
  let tmp = noop;
  tmp = new tmp(noop._61);
  tmp._65 = 1;
  tmp._55 = _55;
  return tmp;
}
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = true;
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = false;
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = null;
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = undefined;
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = 0;
noop = new noop(noop._61);
noop._65 = 1;
noop._55 = "";
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
noop.all = (arg0) => {
  const call = slice.call;
  const _require = typeof call === "unknown" ? slice() : call(arg0);
  return new _require(1019)((fn) => {
    closure_0 = fn;
    closure_1 = arg1;
    function res(arg0, closure_0) {
      let _65;
      const callback = arg0;
      if (closure_0) {
        if (typeof closure_0 === "object") {
          if (closure_0 instanceof callback(dependencyMap[0])) {
            if (closure_0.then === tmp(dependencyMap[0]).prototype.then) {
              let tmp13 = closure_0;
              let promise2 = closure_0;
              if (3 === closure_0._65) {
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
noop.reject = (arg0) => {
  const _require = arg0;
  return new _require(1019)((arg0, fn) => {
    fn(closure_0);
  });
};
noop.race = (arg0) => {
  const _require = arg0;
  return new _require(1019)((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const item = closure_0.forEach((item, index) => {
      const obj = callback(table[0]);
      callback(table[0]).resolve(item).then(callback, table);
    });
  });
};
noop.prototype.catch = function(arg0) {
  return this.then(null, arg0);
};

export default noop;