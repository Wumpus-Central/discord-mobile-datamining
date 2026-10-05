// === Module 551: debounce ===

// Module 551 (debounce)
import _mod556 from "module_556" /* 556 */;

const require = globalThis.__r;
let _require, applyResult1, c2, c3, c6, c7, dependencyMap;


export default function debounce(fn, arg1, leading) {
  let closure_1;
  _require = fn;
  dependencyMap = arg1;
  function timerExpired() {
    const tmp = _mod556();
    const diff = tmp - c7;
    let tmp3 = undefined === c7 || diff >= closure_1 || diff < 0;
    if (!tmp3) {
      tmp3 = closure_10 && tmp - c8 >= closure_4;
      const tmp5 = closure_10 && tmp - c8 >= closure_4;
    }
    if (tmp3) {
      c6 = undefined;
      if (flag) {
        let tmp20;
        if (c2) {
          c3 = undefined;
          c2 = undefined;
          c8 = tmp;
          const applyResult = fn.apply(c3, tmp19);
          tmp20 = applyResult;
          applyResult1 = applyResult;
        }
        return tmp20;
      }
      c3 = undefined;
      c2 = undefined;
      tmp20 = applyResult1;
    } else {
      const diff1 = closure_1 - (tmp - c7);
      let tmp14 = diff1;
      const _setTimeout = setTimeout;
      if (closure_10) {
        tmp14 = min(diff1, closure_4 - (tmp - c8));
      }
      c6 = _setTimeout(timerExpired, tmp14);
    }
  }
  let c8 = 0;
  leading = false;
  let closure_10 = false;
  let flag = true;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let tmp = require("toNumber")(arg1) || 0;
    dependencyMap = tmp;
    if (require("isObject")(leading)) {
      leading = leading.leading;
      let tmp3 = "maxWait" in leading;
      closure_10 = tmp3;
      let tmp5Result;
      if (tmp3) {
        let tmp6 = tmp10(552)(leading.maxWait) || 0;
        tmp5Result = max(tmp6, tmp);
      }
      let closure_4 = tmp5Result;
      flag = true;
      if ("trailing" in leading) {
        flag = leading.trailing;
      }
    }
    function debounced() {
      let timeout;
      const tmp = _mod556();
      const diff = tmp - c7;
      let tmp3 = undefined === c7 || diff >= closure_1 || diff < 0;
      if (!tmp3) {
        tmp3 = closure_10 && tmp - c8 >= closure_4;
        const tmp5 = closure_10 && tmp - c8 >= closure_4;
      }
      c2 = arguments;
      c3 = this;
      c7 = tmp;
      if (tmp3) {
        if (undefined === timeout) {
          let tmp26;
          c8 = tmp;
          const _setTimeout3 = setTimeout;
          timeout = setTimeout(timerExpired, closure_1);
          if (leading) {
            c3 = undefined;
            c2 = undefined;
            c8 = tmp;
            const applyResult = fn.apply(c3, c2);
            applyResult1 = applyResult;
            tmp26 = applyResult;
          } else {
            tmp26 = applyResult1;
          }
          return tmp26;
        } else if (closure_10) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout2 = setTimeout;
          timeout = setTimeout(timerExpired, closure_1);
          c3 = undefined;
          c2 = undefined;
          c8 = c7;
          applyResult1 = fn.apply(c3, c2);
          return applyResult1;
        }
      }
      if (undefined === timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(timerExpired, closure_1);
      }
      return applyResult1;
    }
    debounced.cancel = function cancel() {
      if (undefined !== c6) {
        const _clearTimeout = clearTimeout;
        clearTimeout(c6);
      }
      c8 = 0;
      c6 = undefined;
      c3 = undefined;
      c7 = undefined;
      c2 = undefined;
    };
    debounced.flush = function flush() {
      let tmp6;
      if (undefined === c6) {
        tmp6 = applyResult1;
      } else {
        c6 = undefined;
        if (flag) {
          if (c2) {
            c3 = undefined;
            c2 = undefined;
            c8 = tmp3;
            tmp6 = fn.apply(c3, tmp5);
            const applyResult = fn.apply(c3, tmp5);
          }
        }
        c3 = undefined;
        c2 = undefined;
        tmp6 = applyResult1;
      }
      return tmp6;
    };
    return debounced;
  }
};