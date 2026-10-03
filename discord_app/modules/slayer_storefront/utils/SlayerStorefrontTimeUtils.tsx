// === Module 10486: SlayerStorefrontTimeUtils ===

// Module 10486 (SlayerStorefrontTimeUtils)
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import _modDef3593 from "module_3593" /* 3593 */;
import _modDef4461 from "module_4461" /* 4461 */;
import useIntervalDefault from "useInterval" /* 6954 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = _modDef4461(arg0).diff(_modDef4461(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      time.days = Math.floor(diffResult / DurationsDefault.Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % DurationsDefault.Seconds.DAY;
      time.hours = Math.floor(result / DurationsDefault.Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % DurationsDefault.Seconds.HOUR;
      time.minutes = Math.floor(result1 / DurationsDefault.Seconds.MINUTE);
      time.seconds = diffResult % DurationsDefault.Seconds.MINUTE;
      tmp4 = time;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(arg0) {
  const tmp = getLimitedOfferTimeLeft(arg0);
  if (null == tmp) {
    return null;
  } else {
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = util.intl;
      const obj2 = { days };
      let formatToPlainStringResult = intl3.formatToPlainString(util.t.BXpdIg, obj2);
    } else if (hours > 0) {
      const intl2 = util.intl;
      const obj3 = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3593.PPaJSw, obj3);
    } else {
      const intl = util.intl;
      const obj = { minutes: null };
      const _Math = Math;
      obj.minutes = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(_modDef3593["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  if (cResult[0] !== arg0) {
    let tmp5 = null != arg0;
    if (tmp5) {
      tmp5 = null == getLimitedOfferTimeLeft(arg0);
    }
    cResult[0] = arg0;
    cResult[1] = tmp5;
    let tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      return arg0 + 1;
    };
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let SECOND = null;
  if (null != arg0) {
    SECOND = null;
    if (!tmp3) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  useIntervalDefault(_slicedToArray(noop.useReducer(tmp7, 0), 2)[1], SECOND);
  return tmp3;
}) : ((arg0) => {
  let tmp = null != arg0;
  if (tmp) {
    tmp = null == getLimitedOfferTimeLeft(arg0);
  }
  let SECOND = null;
  if (null != arg0) {
    SECOND = null;
    if (!tmp) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  useIntervalDefault(_slicedToArray(noop.useReducer((arg0) => arg0 + 1, 0), 2)[1], SECOND);
  return tmp;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export const useIsLimitedOfferExpired = tmp2;
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return formatLimitedOfferTimeLeft(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const obj = require("c");
  [r10022, importDefault] = noop.useState(tmp4);
  if (cResult[2] !== arg0) {
    class L {
      constructor() {
        tmp = closure_1(formatLimitedOfferTimeLeft(closure_0));
        return;
      }
    }
    cResult[2] = arg0;
    cResult[3] = L;
  } else {
    class L {
      constructor() {
        tmp = closure_1(formatLimitedOfferTimeLeft(closure_0));
        return;
      }
    }
  }
  const tmp5 = _slicedToArray(noop.useState(tmp4), 2);
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        tmp = closure_1(formatLimitedOfferTimeLeft(closure_0));
        return;
      }
    }
  }
  useIntervalDefault(L, null);
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        tmp = closure_1(formatLimitedOfferTimeLeft(closure_0));
        return;
      }
    }
  }
  return null;
}) : ((arg0) => {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => formatLimitedOfferTimeLeft(closure_0)), 2);
  importDefault = tmp[1];
  let num = null;
  if (flag) {
    num = 1000;
  }
  useIntervalDefault(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, num);
  let first = null;
  if (flag) {
    first = tmp[0];
  }
  return first;
});