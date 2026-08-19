// _runtime/02007_asyncRequireImpl.js
import asyncGeneratorStep from "02008_asyncGeneratorStep.js";

function asyncRequireImpl(dependencyMap) {
  const _global = dependencyMap;
  const tmp = _global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  let tmpResult;
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp4 = arg1[String(undefined, dependencyMap)];
      if (null != tmp4) {
        tmpResult = tmp(tmp4);
      }
    }
  }
  if (null != tmpResult) {
    let nextPromise = tmpResult.then(function importAll(dependencyMap) {
      return require.importAll(closure_0);
    });
  } else {
    nextPromise = require.importAll(dependencyMap);
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
    closure_0 = arg0;
    closure_1 = arg1;
    c2 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
            obj[0] = closure_1_3(closure_0, closure_1);
            return obj;
          }
        } catch (tmp7) {
          c2 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
asyncRequire.unstable_importMaybeSync = function unstable_importMaybeSync(dependencyMap) {
  const _global = dependencyMap;
  const tmp = _global["" + globalThis.__METRO_GLOBAL_PREFIX__ + "__loadBundleAsync"];
  let tmpResult;
  if (null != tmp) {
    const _String = String;
    if (null != arg1) {
      const tmp4 = arg1[String(undefined, dependencyMap)];
      if (null != tmp4) {
        tmpResult = tmp(tmp4);
      }
    }
  }
  if (null != tmpResult) {
    let nextPromise = tmpResult.then(function importAll(dependencyMap) {
      return require.importAll(closure_0);
    });
  } else {
    nextPromise = require.importAll(dependencyMap);
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
    tmpResult.then((result) => {

    }, () => {

    });
  }
};

export default asyncRequire;