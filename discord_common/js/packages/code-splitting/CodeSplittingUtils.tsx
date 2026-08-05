// discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, Fragment: c5 } = jsxProd);
function loaderMaker() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "transparent";
  }
  return () => {
    const style = { position: "absolute", width: "100%", height: "100%", backgroundColor: str };
    return outer1_4("div", { style });
  };
}
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10029 in require("_importWithRetry")) {
  let tmp4 = key10029;
  arg5[key10029] = require("_importWithRetry")[key10029];
  continue;
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  let _slicedToArray;
  let dependencyMap;
  let name;
  let require;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name } = memo);
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  let closure_4;
  closure_4 = name.lazy(() => {
    let obj = outer1_0(outer1_1[3]);
    obj = { createPromise: closure_0, webpackId: closure_1, name };
    return obj.importWithRetry(obj);
  });
  class Wrapper {
    constructor(arg0) {
      tmp = f73243;
      if (null != renderLoader) {
        tmp2Result = tmp2();
      } else {
        tmp3 = outer1_6;
        if (typeof outer1_6 !== "function") {
          str3 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        str = "transparent";
        transparent = "transparent";
        obj = { style: null };
        obj = { position: "absolute", width: "100%", height: "100%", backgroundColor: null };
        obj[3] = "transparent";
        obj[0] = obj;
        str2 = "div";
        tmp2Result = tmp("div", obj);
      }
      obj1 = { fallback: tmp2Result, children: null };
      obj2 = {};
      merged = Object.assign(memo);
      obj1[1] = tmp(f73243, obj2);
      return tmp(name.Suspense, obj1);
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
  let _slicedToArray;
  let dependencyMap;
  let memo;
  let name;
  let require;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  let closure_5;
  const React = null;
  let c4 = null;
  closure_5 = React.lazy(function importPromise() {
    if (null == noop) {
      let obj = outer1_0(outer1_1[3]);
      obj = { createPromise: null, webpackId: null };
      obj[0] = closure_0;
      obj[1] = closure_1;
      noop = obj.importWithRetry(obj).then((arg0) => {
        let closure_4 = arg0.default;
        return arg0;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
    return noop;
  });
  class Wrapper {
    constructor(arg0) {
      tmp = c3;
      first = renderLoader(c3.useState(() => closure_4), 1)[0];
      if (null != first) {
        tmp10 = c4;
        obj = {};
        tmp11 = obj;
        tmp12 = arg0;
        merged = Object.assign(arg0);
        tmp14Result1 = c4(first, obj);
      } else {
        tmp14 = c4;
        if (null != renderLoader) {
          tmp14Result = renderLoader();
        } else {
          tmp3 = outer1_6;
          if (typeof outer1_6 !== "function") {
            str3 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          str = "transparent";
          transparent = "transparent";
          obj = { style: null };
          obj1 = { position: "absolute", width: "100%", height: "100%", backgroundColor: null };
          obj1[3] = "transparent";
          obj[0] = obj1;
          str2 = "div";
          tmp14Result = tmp14("div", obj);
        }
        obj2 = { fallback: null, children: null };
        obj2[0] = tmp14Result;
        tmp5 = importPromise;
        obj3 = {};
        tmp6 = obj3;
        tmp7 = arg0;
        merged1 = Object.assign(arg0);
        obj2[1] = tmp14(importPromise, obj3);
        tmp14Result1 = tmp14(tmp.Suspense, obj2);
      }
      return tmp14Result1;
    }
  }
  let memoResult = Wrapper;
  if (memo) {
    memoResult = React.memo(Wrapper);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    if (null == noop) {
      let obj = outer1_0(outer1_1[3]);
      obj = { createPromise: null, webpackId: null };
      obj[0] = closure_0;
      obj[1] = closure_1;
      noop = obj.importWithRetry(obj).then((arg0) => {
        let closure_4 = arg0.default;
        return arg0;
      });
      const importWithRetryResult = obj.importWithRetry(obj);
    }
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  let c2;
  let dependencyMap;
  let render;
  let renderFallback;
  let require;
  let tmp2;
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  let callback;
  ({ render, renderFallback } = arg0);
  [tmp2, c2] = callback(React.useState(null), 2);
  const effect = React.useEffect(() => {
    let obj = outer1_0(outer1_1[3]);
    obj = { createPromise: closure_0, webpackId: closure_1 };
    obj.importWithRetry(obj).then((arg0) => callback(arg0.default));
  }, []);
  const tmp = callback(React.useState(null), 2);
  const tmp4 = closure_4;
  const tmp5 = closure_5;
  return tmp4(tmp5, { children: null == tmp2 ? renderFallback() : render(tmp2) });
};