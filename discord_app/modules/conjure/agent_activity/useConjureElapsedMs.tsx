// === Module 17045: useConjureElapsedMs ===

// Module 17045 (useConjureElapsedMs)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = { second: 1000, minute: 60000 };
const ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/useConjureElapsedMs.tsx");

export const useConjureElapsedMs = function useConjureElapsedMs(startedAt, arg1) {
  if (closure_5) {
    closure_129_0 = startedAt;
    const cResult = require("c").c(5);
    let str2 = "second";
    if (undefined !== arg1) {
      str2 = arg1;
    }
    closure_129_1 = str2;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c() {
        return Date.now();
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    const obj = require("c");
    closure_129_2 = _slicedToArray(noop.useState(first), 2)[1];
    if (cResult[1] === str2) {
      if (cResult[2] === startedAt) {
        let tmp16 = cResult[3];
        let tmp17 = cResult[4];
      }
      const effect = noop.useEffect(tmp16, tmp17);
      let bound;
      if (null != startedAt) {
        const _Math2 = Math;
        bound = Math.max(0, tmp15 - startedAt);
      }
      let bound1 = bound;
    }
    const fn2 = function v() {
      if (null != timeout) {
        closure_1 = tmp4;
        function tick() {
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
    tmp17 = items;
    tmp16 = fn2;
    const tmp14 = _slicedToArray(noop.useState(first), 2);
  } else {
    _require = startedAt;
    str = arg1;
    if (arg1 === undefined) {
      str = "second";
    }
    _slicedToArray = undefined;
    const tmp3 = _slicedToArray(noop.useState(() => Date.now()), 2);
    _slicedToArray = tmp3[1];
    const items1 = [startedAt, str];
    const effect1 = noop.useEffect(() => {
      if (null != timeout) {
        closure_1 = tmp4;
        function tick() {
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
      bound1 = Math.max(0, tmp3[0] - startedAt);
    }
  }
  return bound1;
};