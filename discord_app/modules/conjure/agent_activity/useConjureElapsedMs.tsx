// === Module 16770: useConjureElapsedMs ===

// Module 16770 (useConjureElapsedMs)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
let closure_4 = { second: 1000, minute: 60000 };
let closure_5 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/conjure/agent_activity/useConjureElapsedMs.tsx");

export const useConjureElapsedMs = function useConjureElapsedMs(startedAt, arg1) {
  let bound1;
  let closure_2;
  let first1;
  let str;
  if (closure_5) {
    let first;
    _require = startedAt;
    const obj = require("react");
    const cResult = obj.c(5);
    let str2 = "second";
    if (undefined !== arg1) {
      str2 = arg1;
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c() {
        return Date.now();
      };
      cResult[0] = fn;
      first = fn;
    } else {
      first = cResult[0];
    }
    [, _slicedToArray] = react.useState(first);
    if (cResult[1] === str2) {
      let tmp18;
      let tmp19;
      if (cResult[2] === startedAt) {
        tmp18 = cResult[3];
        tmp19 = cResult[4];
      }
      const effect = react.useEffect(tmp18, tmp19);
      let bound;
      if (null != startedAt) {
        const _Math2 = Math;
        bound = Math.max(0, tmp17 - startedAt);
      }
      bound1 = bound;
    }
    const fn2 = function v() {
      let timeout;
      if (null != timeout) {
        let closure_1 = tmp4;
        function tick() {
          let timeout;
          const timestamp = Date.now();
          tick(timestamp);
          timeout = setTimeout(tick, closure_1 - ((timestamp - timeout) % closure_1 + closure_1) % closure_1);
        }
        const _Date = Date;
        let timestamp = Date.now();
        tick(timestamp);
        const _setTimeout = setTimeout;
        timeout = setTimeout(tick, tmp4 - ((timestamp - tmp) % tmp4 + tmp4) % tmp4);
        return () => clearTimeout(closure_0);
      }
    };
    const items = [startedAt, str2];
    cResult[1] = str2;
    cResult[2] = startedAt;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp19 = items;
    tmp18 = fn2;
  } else {
    _require = startedAt;
    str = arg1;
    if (arg1 === undefined) {
      str = "second";
    }
    _slicedToArray = undefined;
    [first1, _slicedToArray] = react.useState(() => Date.now());
    const items1 = [startedAt, str];
    const effect1 = react.useEffect(() => {
      let closure_0;
      let timeout;
      if (null != timeout) {
        let closure_1 = tmp4;
        function tick() {
          let timeout;
          const timestamp = Date.now();
          tick(timestamp);
          timeout = setTimeout(tick, closure_1 - ((timestamp - timeout) % closure_1 + closure_1) % closure_1);
        }
        const _Date = Date;
        let timestamp = Date.now();
        tick(timestamp);
        const _setTimeout = setTimeout;
        timeout = setTimeout(tick, tmp4 - ((timestamp - tmp) % tmp4 + tmp4) % tmp4);
        return () => clearTimeout(closure_0);
      }
    }, items1);
    if (null != startedAt) {
      const _Math = Math;
      bound1 = Math.max(0, first1 - startedAt);
    }
  }
  return bound1;
};