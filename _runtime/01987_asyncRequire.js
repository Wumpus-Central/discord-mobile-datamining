// === Module 1987: asyncRequire ===

// Module 1987 (asyncRequire)
import _asyncToGenerator from "_asyncToGenerator" /* 1988 */;

let _global, c2;

function importAll() {
  return require.importAll(dependencyMap);
}
function asyncRequireImpl(dependencyMap, arg1) {
  let nextPromise;
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
    nextPromise = tmpResult.then(importAll);
  } else {
    nextPromise = require.importAll(dependencyMap);
  }
  return nextPromise;
}
function asyncRequire(arg0, arg1, arg2) {
  return obj(...arguments);
}
let obj = function _asyncRequire() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 3;
          obj = { value: asyncRequireImpl(closure_0, closure_1), done: true };
          return obj;
        }
      } catch (tmp6) {
        c2 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
asyncRequire.unstable_importMaybeSync = function unstable_importMaybeSync(dependencyMap, arg1) {
  let nextPromise;
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
    nextPromise = tmpResult.then(importAll);
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