// _runtime/00636_debounce.js
import { isObject } from "00606_isObject.js";
import { toNumber } from "00637_toNumber.js";

export default function debounce(fn, arg1, leading) {
  const _require = fn;
  dependencyMap = arg1;
  function timerExpired() {
    const tmp = callback(641)();
    const diff = tmp - closure_7;
    let tmp3 = undefined === closure_7;
    if (!tmp3) {
      tmp3 = diff >= dependencyMap;
    }
    if (!tmp3) {
      tmp3 = diff < 0;
    }
    if (!tmp3) {
      let tmp5 = closure_10;
      if (closure_10) {
        tmp5 = tmp - closure_8 >= closure_4;
      }
      tmp3 = tmp5;
    }
    if (tmp3) {
      let timeout;
      if (flag) {
        if (c2) {
          c3 = undefined;
          c2 = undefined;
          closure_8 = tmp;
          const applyResult = callback.apply(c3, tmp19);
          closure_5 = applyResult;
          let tmp20 = applyResult;
        }
        return tmp20;
      }
      c3 = undefined;
      c2 = undefined;
      tmp20 = closure_5;
    } else {
      const diff1 = dependencyMap - (tmp - closure_7);
      let tmp14 = diff1;
      if (closure_10) {
        tmp14 = closure_1_3(diff1, closure_4 - (tmp - closure_8));
      }
      timeout = setTimeout(timerExpired, tmp14);
    }
  }
  c8 = 0;
  leading = false;
  closure_10 = false;
  let flag = true;
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let tmp = toNumber(arg1) || 0;
    dependencyMap = tmp;
    if (isObject(leading)) {
      leading = leading.leading;
      closure_10 = tmp3;
      let tmp5Result;
      if ("maxWait" in leading) {
        tmp5Result = max(tmp12(637)(leading.maxWait) || 0, tmp);
        let tmp5 = max;
        let tmp6 = tmp12(637)(leading.maxWait) || 0;
      }
      closure_4 = tmp5Result;
      flag = true;
      if ("trailing" in leading) {
        flag = leading.trailing;
      }
    }
    function debounced() {
      const tmp = callback(641)();
      const diff = tmp - closure_7;
      let tmp3 = undefined === closure_7;
      if (!tmp3) {
        tmp3 = diff >= dependencyMap;
      }
      if (!tmp3) {
        tmp3 = diff < 0;
      }
      if (!tmp3) {
        let tmp5 = closure_10;
        if (closure_10) {
          tmp5 = tmp - closure_8 >= closure_4;
        }
        tmp3 = tmp5;
      }
      c2 = arguments;
      c3 = this;
      closure_7 = tmp;
      if (tmp3) {
        if (undefined === timeout) {
          closure_8 = tmp;
          const _setTimeout3 = setTimeout;
          timeout = setTimeout(timerExpired, dependencyMap);
          if (leading) {
            c3 = undefined;
            c2 = undefined;
            closure_8 = tmp;
            const applyResult = callback.apply(c3, c2);
            let applyResult1 = applyResult;
            let tmp26 = applyResult;
          } else {
            tmp26 = applyResult1;
          }
          return tmp26;
        } else if (closure_10) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout2 = setTimeout;
          timeout = setTimeout(timerExpired, dependencyMap);
          c3 = undefined;
          c2 = undefined;
          closure_8 = closure_7;
          applyResult1 = callback.apply(c3, c2);
          return applyResult1;
        }
      }
      if (undefined === timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(timerExpired, dependencyMap);
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
        let tmp6 = closure_5;
      } else {
        c6 = undefined;
        if (flag) {
          if (c2) {
            c3 = undefined;
            c2 = undefined;
            c8 = tmp3;
            const applyResult = callback.apply(c3, tmp5);
            closure_5 = applyResult;
            tmp6 = applyResult;
          }
        }
        c3 = undefined;
        c2 = undefined;
        tmp6 = closure_5;
      }
      return tmp6;
    };
    return debounced;
  }
}
