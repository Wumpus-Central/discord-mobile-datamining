// discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx
import importWithRetry from "importWithRetry.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty } = jsxProd);
function loaderMaker() {
  if (arg0 === undefined) {
    const str = "transparent";
  }
  return () => {
    const obj = { style: null };
    const size = { position: "absolute", width: "100%", height: "100%", backgroundColor: str };
    obj.style = size;
    return React4("div", obj);
  };
}
let size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10029 in require("importWithRetry")) {
  arg5[key10029] = require("importWithRetry")[key10029];
  continue;
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name } = memo);
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  closure_4 = name.lazy(() => {
    const obj = { createPromise, webpackId, name };
    return obj.importWithRetry(obj);
  });
  class Wrapper {
    constructor(arg0) {
      tmp = jsx;
      if (null != renderLoader) {
        tmp2Result = tmp2();
      } else {
        tmp3 = loaderMaker;
        if (typeof loaderMaker === "function") {
          str = "transparent";
          transparent = "transparent";
          obj = { style: null };
          size = { position: "absolute", width: "100%", height: "100%", backgroundColor: null };
          size.backgroundColor = "transparent";
          obj.style = size;
          str2 = "div";
          tmp2Result = tmp("div", obj);
        } else {
          str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = { fallback: tmp2Result, children: null };
      obj1 = {};
      merged = Object.assign(memo);
      obj.children = tmp(closure_4, obj1);
      return tmp(closure_3.Suspense, obj);
    }
  }
  let memoResult = Wrapper;
  if (flag) {
    memoResult = name.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  return memoResult;
};
export const makeLazyWithPreload = function makeLazyWithPreload(arg0) {
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  noop = null;
  c4 = null;
  closure_5 = noop.lazy(function importPromise() {
    if (null == closure_3) {
      const obj = { createPromise, webpackId };
      closure_3 = obj.importWithRetry(obj).then((result) => {
        closure_4 = result.default;
        return result;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
    return closure_3;
  });
  class Wrapper {
    constructor(arg0) {
      tmp = closure_3;
      first = closure_2(
        closure_3.useState(() => closure_1_4),
        1,
      )[0];
      if (null != first) {
        tmp10 = jsx;
        obj = {};
        tmp11 = obj;
        tmp12 = arg0;
        merged = Object.assign(arg0);
        tmp14Result1 = jsx(first, obj);
      } else {
        tmp14 = jsx;
        if (null != renderLoader) {
          tmp14Result = renderLoader();
        } else {
          tmp3 = loaderMaker;
          if (typeof loaderMaker === "function") {
            str = "transparent";
            transparent = "transparent";
            obj = { style: null };
            size = { position: "absolute", width: "100%", height: "100%", backgroundColor: null };
            size.backgroundColor = "transparent";
            obj.style = size;
            str2 = "div";
            tmp14Result = tmp14("div", obj);
          } else {
            str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj1 = { fallback: null, children: null };
        obj1.fallback = tmp14Result;
        tmp5 = closure_5;
        obj2 = {};
        tmp6 = obj2;
        tmp7 = arg0;
        merged1 = Object.assign(arg0);
        obj1.children = tmp14(closure_5, obj2);
        tmp14Result1 = tmp14(tmp.Suspense, obj1);
      }
      return tmp14Result1;
    }
  }
  let memoResult = Wrapper;
  if (memo) {
    memoResult = noop.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    if (null == closure_3) {
      const obj = { createPromise, webpackId };
      closure_3 = obj.importWithRetry(obj).then((result) => {
        closure_4 = result.default;
        return result;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  _slicedToArray = undefined;
  ({ render, renderFallback } = arg0);
  [tmp2, c2] = _slicedToArray(noop.useState(null), 2);
  const effect = noop.useEffect(() => {
    const obj = { createPromise, webpackId };
    obj.importWithRetry(obj).then((result) => closure_1_2(result.default));
  }, []);
  const tmp = _slicedToArray(noop.useState(null), 2);
  return closure_4(closure_5, { children: null == tmp2 ? renderFallback() : render(tmp2) });
};
