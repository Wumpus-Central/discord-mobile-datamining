// === Module 1959: asyncRequireImpl ===

// Module 1959 (asyncRequireImpl)
import asyncGeneratorStep from "asyncGeneratorStep";

function asyncRequireImpl(closure_0) {
  const _global = closure_0;
  const tmp = _global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  let tmpResult;
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp4 = arg1[String(undefined, closure_0)];
      if (null != tmp4) {
        tmpResult = tmp(tmp4);
      }
    }
  }
  if (null != tmpResult) {
    let nextPromise = tmpResult.then(function importAll(closure_0) {
      return outer1_1.importAll(closure_0);
    });
  } else {
    nextPromise = require.importAll(closure_0);
  }
  return nextPromise;
}
function asyncRequire(arg0, arg1, arg2) {
  const self = this;
  const apply = _asyncRequire.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _asyncRequire() {
  const self = this;
  const tmp = asyncGeneratorStep((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c2 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = outer1_3(closure_0, closure_1);
            return obj;
          }
        } catch (tmp7) {
          c2 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  const _asyncRequire = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
asyncRequire.unstable_importMaybeSync = function unstable_importMaybeSync(closure_0) {
  const _global = closure_0;
  const tmp = _global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  let tmpResult;
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp4 = arg1[String(undefined, closure_0)];
      if (null != tmp4) {
        tmpResult = tmp(tmp4);
      }
    }
  }
  if (null != tmpResult) {
    let nextPromise = tmpResult.then(function importAll(closure_0) {
      return outer1_1.importAll(closure_0);
    });
  } else {
    nextPromise = require.importAll(closure_0);
  }
  return nextPromise;
};
asyncRequire.prefetch = (arg0, arg1, arg2) => {
  const tmp = global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  let tmpResult;
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp5 = arg1[String(undefined, arg0)];
      if (null != tmp5) {
        tmpResult = tmp(tmp5);
      }
    }
  }
  if (tmpResult != null) {
    tmpResult.then(() => {

    }, () => {

    });
  }
};

export default asyncRequire;