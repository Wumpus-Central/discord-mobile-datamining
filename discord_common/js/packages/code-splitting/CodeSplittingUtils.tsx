// discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx
import ReactCompilerGating from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import importWithRetry from "importWithRetry.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_3;

let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
function loaderMaker() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "transparent";
  }
  return () => {
    const obj = { style: size };
    size = { position: "absolute", width: "100%", height: "100%", backgroundColor: str };
    return React3("div", obj);
  };
}
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx");
for (const key10029 in importWithRetry) {
  exports[key10029] = importWithRetry[key10029];
  continue;
}

export { loaderMaker };
export const makeLazy = function makeLazy(memo) {
  let createPromise;
  let name;
  let webpackId;
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name } = memo);
  let flag = memo.memo;
  if (flag === undefined) {
    flag = false;
  }
  let obj = name;
  let closure_4 = name.lazy(() => {
    const obj = importWithRetry;
    const obj2 = { createPromise: require, webpackId: dependencyMap, name };
    return obj.importWithRetry(obj2);
  });
  let obj2 = ReactCompilerGating;
  const tmp = obj2.isReactCompilerEnabled()
    ? (arg0) => {
        let first;
        let obj4;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(3);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let tmp6;
          if (null != _slicedToArray) {
            tmp6 = _slicedToArray();
          } else if (typeof loaderMaker === "function") {
            const transparent = "transparent";
            const obj2 = { style: size };
            size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
            tmp6 = React3("div", obj2);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== arg0) {
          const obj3 = { fallback: first, children: React3(closure_4, obj4) };
          const Suspense = react.Suspense;
          obj4 = {};
          const merged = Object.assign(arg0);
          const tmp14 = React3(Suspense, obj3);
          cResult[1] = arg0;
          cResult[2] = tmp14;
          tmp7 = tmp14;
        } else {
          tmp7 = cResult[2];
        }
        return tmp7;
      }
    : (arg0) => {
        let obj3;
        let tmpResult;
        const Suspense = react.Suspense;
        if (null != _slicedToArray) {
          tmpResult = tmp2();
        } else if (typeof loaderMaker === "function") {
          const transparent = "transparent";
          const obj = { style: size };
          size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
          tmpResult = React3("div", obj);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const obj2 = { fallback: tmpResult, children: React3(closure_4, obj3) };
        obj3 = {};
        const merged = Object.assign(arg0);
        return React3(Suspense, obj2);
      };
  let memoResult = tmp;
  if (flag) {
    memoResult = obj.memo(tmp);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  return memoResult;
};
export const makeLazyWithPreload = function makeLazyWithPreload(arg0) {
  let createPromise;
  let memo;
  let name;
  let webpackId;
  const f135734 = (result) => {
    closure_4 = result.default;
    return result;
  };
  ({ createPromise: require, webpackId: dependencyMap, renderLoader: _slicedToArray, name, memo } = arg0);
  if (memo === undefined) {
    memo = false;
  }
  react = null;
  let c4 = null;
  let obj = react;
  let closure_5 = react.lazy(function importPromise() {
    if (null == closure_3) {
      const obj2 = { createPromise: require, webpackId: dependencyMap };
      const obj = importWithRetry;
      const importWithRetryResult = obj.importWithRetry(obj2);
      closure_3 = importWithRetryResult.then(f135734);
    }
    return closure_3;
  });
  let obj2 = ReactCompilerGating;
  const tmp = obj2.isReactCompilerEnabled()
    ? (arg0) => {
        let first;
        let obj5;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(7);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function c() {
            return closure_1_4;
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        const first1 = _slicedToArray(react.useState(first), 1)[0];
        if (null != first1) {
          if (cResult[1] === first1) {
            let tmp16;
            if (cResult[2] === arg0) {
              tmp16 = cResult[3];
            }
            tmp9 = tmp16;
          }
          const obj2 = {};
          const merged = Object.assign(arg0);
          const tmp21 = React3(first1, obj2);
          cResult[1] = first1;
          cResult[2] = arg0;
          cResult[3] = tmp21;
          tmp16 = tmp21;
        } else {
          let tmp5;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            let tmp8;
            if (null != _slicedToArray) {
              tmp8 = _slicedToArray();
            } else if (typeof loaderMaker === "function") {
              const transparent = "transparent";
              const obj3 = { style: size };
              size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
              tmp8 = React3("div", obj3);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            cResult[4] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp5 = cResult[4];
          }
          if (cResult[5] !== arg0) {
            const obj4 = { fallback: tmp5, children: React3(closure_5, obj5) };
            const Suspense = react.Suspense;
            obj5 = {};
            const merged1 = Object.assign(arg0);
            const tmp15 = React3(Suspense, obj4);
            cResult[5] = arg0;
            cResult[6] = tmp15;
            tmp9 = tmp15;
          } else {
            tmp9 = cResult[6];
          }
        }
        return tmp9;
      }
    : (arg0) => {
        let obj4;
        let tmp14Result2;
        const first = _slicedToArray(
          react.useState(() => closure_1_4),
          1,
        )[0];
        if (null != first) {
          const obj2 = {};
          const merged = Object.assign(arg0);
          tmp14Result2 = React3(first, obj2);
        } else {
          let tmp14Result;
          const Suspense = react.Suspense;
          if (null != _slicedToArray) {
            tmp14Result = _slicedToArray();
          } else if (typeof loaderMaker === "function") {
            const transparent = "transparent";
            const obj = { style: size };
            size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
            tmp14Result = React3("div", obj);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          const obj3 = { fallback: tmp14Result, children: React3(closure_5, obj4) };
          obj4 = {};
          const merged1 = Object.assign(arg0);
          tmp14Result2 = React3(Suspense, obj3);
        }
        return tmp14Result2;
      };
  let memoResult = tmp;
  if (memo) {
    memoResult = obj.memo(tmp);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    if (null == closure_3) {
      const obj2 = { createPromise: require, webpackId: dependencyMap };
      const obj = importWithRetry;
      const importWithRetryResult = obj.importWithRetry(obj2);
      closure_3 = importWithRetryResult.then(f135734);
    }
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  let c2;
  let createPromise;
  let render;
  let renderFallback;
  let tmp2;
  let webpackId;
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  _slicedToArray = undefined;
  ({ render, renderFallback } = arg0);
  [tmp2, c2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    const obj = importWithRetry;
    const obj2 = { createPromise: require, webpackId: dependencyMap };
    const importWithRetryResult = obj.importWithRetry(obj2);
    importWithRetryResult.then((result) => closure_1_2(result.default));
  }, []);
  let obj = { children: null == tmp2 ? renderFallback() : render(tmp2) };
  return closure_4(closure_5, obj);
};
