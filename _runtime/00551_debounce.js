// _runtime/00551_debounce.js
import _mod556 from "metro/00556__.js";

export default function debounce(fn, arg1, leading) {
  _require = fn;
  dependencyMap = arg1;
  function timerExpired() {
    const tmp = _mod556();
    const diff = tmp - c7;
    let tmp3 = undefined === c7;
    if (!tmp3) {
      tmp3 = diff >= closure_1;
    }
    if (!tmp3) {
      tmp3 = diff < 0;
    }
    if (!tmp3) {
      let tmp5 = closure_10;
      if (closure_10) {
        tmp5 = tmp - c8 >= closure_4;
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      let timeout;
      if (flag) {
        if (c2) {
          c3 = undefined;
          c2 = undefined;
          c8 = tmp;
          const applyResult = closure_0.apply(c3, tmp19);
          let tmp20 = applyResult;
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
      if (closure_10) {
        tmp14 = min(diff1, closure_4 - (tmp - c8));
      }
      timeout = setTimeout(timerExpired, tmp14);
    }
  }
  c8 = 0;
  leading = false;
  closure_10 = false;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let tmp = require("metro/00552__.js")(arg1) || 0;
    dependencyMap = tmp;
    if (require("metro/00521__.js")(leading)) {
      leading = leading.leading;
      closure_10 = tmp3;
      let tmp5Result;
      if ("maxWait" in leading) {
        tmp5Result = max(tmp12(552)(leading.maxWait) || 0, tmp);
        let tmp6 = tmp12(552)(leading.maxWait) || 0;
      }
      closure_4 = tmp5Result;
    }
    function debounced() {
      const tmp = _mod556();
      const diff = tmp - c7;
      let tmp3 = undefined === c7;
      if (!tmp3) {
        tmp3 = diff >= closure_1;
      }
      if (!tmp3) {
        tmp3 = diff < 0;
      }
      if (!tmp3) {
        let tmp5 = closure_10;
        if (closure_10) {
          tmp5 = tmp - c8 >= closure_4;
        }
        tmp3 = tmp5;
      }
      c2 = arguments;
      c3 = this;
      c7 = tmp;
      if (tmp3) {
        if (undefined === timeout) {
          c8 = tmp;
          const _setTimeout3 = setTimeout;
          timeout = setTimeout(timerExpired, closure_1);
          if (leading) {
            c3 = undefined;
            c2 = undefined;
            c8 = tmp;
            const applyResult = closure_0.apply(c3, c2);
            applyResult1 = applyResult;
            let tmp26 = applyResult;
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
          applyResult1 = closure_0.apply(c3, c2);
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
      if (undefined === c6) {
        let tmp6 = applyResult1;
      } else {
        c6 = undefined;
        if (flag) {
          if (c2) {
            c3 = undefined;
            c2 = undefined;
            c8 = tmp3;
            const applyResult = closure_0.apply(c3, tmp5);
            tmp6 = applyResult;
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
}
