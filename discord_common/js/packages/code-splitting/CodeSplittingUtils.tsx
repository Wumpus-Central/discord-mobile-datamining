// === Module 4745: CodeSplittingUtils ===

// Module 4745 (CodeSplittingUtils)
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import c from "c" /* 576 */;
import importWithRetry from "importWithRetry" /* 4746 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
  closure_4 = name.lazy(() => importWithRetry.importWithRetry({ createPromise, webpackId, name }));
  const tmp = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    const cResult = c.c(3);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      if (null != _slicedToArray) {
        let tmp6 = _slicedToArray();
      } else if (typeof loaderMaker === "function") {
        const transparent = "transparent";
        const obj2 = { style: null };
        const size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
        obj2.style = size;
        tmp6 = React4("div", obj2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      cResult[0] = tmp6;
    } else {
      if (cResult[1] !== arg0) {
        const obj3 = { fallback: tmp2, children: null };
        const obj4 = {};
        const merged = Object.assign(arg0);
        obj3.children = React4(closure_4, obj4);
        const tmp16 = React4(noop.Suspense, obj3);
        cResult[1] = arg0;
        cResult[2] = tmp16;
        let tmp9 = tmp16;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  }) : ((arg0) => {
    if (null != _slicedToArray) {
      let tmpResult = tmp2();
    } else if (typeof loaderMaker === "function") {
      const transparent = "transparent";
      const obj = { style: null };
      const size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
      obj.style = size;
      tmpResult = React4("div", obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    const obj2 = { fallback: tmpResult, children: null };
    const merged = Object.assign(arg0);
    obj2.children = React4(closure_4, {});
    return React4(noop.Suspense, obj2);
  });
  let memoResult = tmp;
  if (flag) {
    memoResult = name.memo(tmp);
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
      const obj2 = { createPromise, webpackId };
      closure_3 = importWithRetry.importWithRetry(obj2).then((result) => {
        closure_4 = result.default;
        return result;
      });
      const importWithRetryResult = importWithRetry.importWithRetry(obj2);
    }
    return closure_3;
  });
  const tmp = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
    const cResult = c.c(7);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c() {
        return closure_1_4;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    let num2 = 1;
    const first1 = _slicedToArray(noop.useState(first), 1)[0];
    if (null != first1) {
      if (cResult[1] === first1) {
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      const tmp22 = React4(first1, obj2);
      cResult[num2] = first1;
      cResult[2] = arg0;
      num2 = 3;
      cResult[3] = tmp22;
    } else {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        if (null != closure_1_2) {
          let tmp8 = closure_1_2();
        } else if (typeof loaderMaker === "function") {
          const transparent = "transparent";
          const obj3 = { style: null };
          const size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
          obj3.style = size;
          tmp8 = React4("div", obj3);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        cResult[4] = tmp8;
      } else {
        if (cResult[5] !== arg0) {
          const obj4 = { fallback: tmp5, children: null };
          const obj5 = {};
          const merged1 = Object.assign(arg0);
          obj4.children = React4(closure_5, obj5);
          const tmp16 = React4(noop.Suspense, obj4);
          cResult[5] = arg0;
          cResult[6] = tmp16;
          let tmp10 = tmp16;
        } else {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }) : ((arg0) => {
    const first = _slicedToArray(noop.useState(() => closure_1_4), 1)[0];
    if (null != first) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      let tmp14Result2 = React4(first, obj2);
    } else {
      if (null != closure_1_2) {
        let tmp14Result = closure_1_2();
      } else if (typeof loaderMaker === "function") {
        const transparent = "transparent";
        const obj = { style: null };
        const size = { position: "absolute", width: "100%", height: "100%", backgroundColor: "transparent" };
        obj.style = size;
        tmp14Result = React4("div", obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj3 = { fallback: tmp14Result, children: null };
      const obj4 = {};
      const merged1 = Object.assign(arg0);
      obj3.children = React4(closure_5, obj4);
      tmp14Result2 = React4(noop.Suspense, obj3);
    }
    return tmp14Result2;
  });
  let memoResult = tmp;
  if (memo) {
    memoResult = noop.memo(tmp);
  }
  if (!name) {
    name = "Unknown";
  }
  memoResult.displayName = "Suspense(" + name + ")";
  memoResult.preload = () => {
    if (null == closure_3) {
      const obj2 = { createPromise, webpackId };
      closure_3 = importWithRetry.importWithRetry(obj2).then((result) => {
        closure_4 = result.default;
        return result;
      });
      const importWithRetryResult = importWithRetry.importWithRetry(obj2);
    }
  };
  return memoResult;
};
export const LazyLibrary = function LazyLibrary(arg0) {
  ({ createPromise: require, webpackId: dependencyMap } = arg0);
  _slicedToArray = undefined;
  ({ render, renderFallback } = arg0);
  [tmp2, c2] = noop.useState(null);
  const effect = noop.useEffect(() => {
    const obj2 = { createPromise, webpackId };
    importWithRetry.importWithRetry({ createPromise, webpackId }).then((result) => closure_1_2(result.default));
  }, []);
  const tmp = _slicedToArray(noop.useState(null), 2);
  return closure_4(closure_5, { children: null == tmp2 ? renderFallback() : render(tmp2) });
};