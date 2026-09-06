// === Module 1896: asyncRequireImpl ===

// Module 1896 (asyncRequireImpl)
import asyncGeneratorStep from "module_1897" /* 1897 */;

function asyncRequireImpl(dependencyMap, arg1) {
  _global = dependencyMap;
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
    let nextPromise = tmpResult.then(function importAll() {
      return require.importAll(closure_0);
    });
  } else {
    nextPromise = require.importAll(dependencyMap);
  }
  return nextPromise;
}
function asyncRequire(arg0, arg1, arg2) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _asyncRequire(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        obj = { value: asyncRequireImpl(closure_0, closure_1), done: true };
        return obj;
      }
    } catch (tmp7) {
      c2 = tmp;
      throw tmp7;
    }
  }
};
asyncRequire.unstable_importMaybeSync = function unstable_importMaybeSync(dependencyMap, arg1) {
  _global = dependencyMap;
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
    let nextPromise = tmpResult.then(function importAll() {
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
    tmpResult.then(() => {

    }, () => {

    });
  }
};

export default asyncRequire;