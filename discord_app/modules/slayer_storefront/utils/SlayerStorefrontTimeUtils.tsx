// === Module 10486: SlayerStorefrontTimeUtils ===

// Module 10486 (SlayerStorefrontTimeUtils)
import react2 from "react" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl4 from "intl" /* 1126 */;
import _modDef3593 from "module_3593" /* 3593 */;
import _modDef4461 from "module_4461" /* 4461 */;
import useIntervalDefault from "useInterval" /* 6954 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function getLimitedOfferTimeLeft(arg0) {
  let floor;
  let floor2;
  let result;
  let result1;
  if (null == arg0) {
    return null;
  } else {
    const obj2 = _modDef4461(arg0);
    const diffResult = obj2.diff(_modDef4461(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const time = { days: Math.floor(diffResult / DurationsDefault.Seconds.DAY), hours: floor(result / DurationsDefault.Seconds.HOUR), minutes: floor2(result1 / DurationsDefault.Seconds.MINUTE), seconds: diffResult % DurationsDefault.Seconds.MINUTE };
      const _Math = Math;
      const _Math2 = Math;
      floor = Math.floor;
      result = diffResult % DurationsDefault.Seconds.DAY;
      const _Math3 = Math;
      floor2 = Math.floor;
      result1 = diffResult % DurationsDefault.Seconds.HOUR;
      tmp4 = time;
    }
    return tmp4;
  }
}
function formatLimitedOfferTimeLeft(arg0) {
  let days;
  let hours;
  const tmp = getLimitedOfferTimeLeft(arg0);
  if (null == tmp) {
    return null;
  } else {
    let formatToPlainStringResult;
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = intl4.intl;
      const obj2 = { days };
      formatToPlainStringResult = intl3.formatToPlainString(intl4.t.BXpdIg, obj2);
    } else if (hours > 0) {
      const intl2 = intl4.intl;
      const obj3 = { hours };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3593.PPaJSw, obj3);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _Math = Math;
      const obj = { minutes: Math.max(tmp13, 1) };
      const prop = _modDef3593["7Z+aIf"];
      formatToPlainStringResult = formatToPlainString(prop, obj);
    }
    return formatToPlainStringResult;
  }
}
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const tmp5 = null != arg0 && null == getLimitedOfferTimeLeft(arg0);
    cResult[0] = arg0;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      return arg0 + 1;
    };
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let SECOND = null;
  const tmp8 = _slicedToArray(react.useReducer(tmp7, 0), 2)[1];
  const tmp10 = useIntervalDefault;
  if (null != arg0) {
    SECOND = null;
    if (!tmp3) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  tmp10(tmp8, SECOND);
  return tmp3;
}) : ((arg0) => {
  const tmp = null != arg0 && null == getLimitedOfferTimeLeft(arg0);
  let SECOND = null;
  const tmp3 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const tmp6 = useIntervalDefault;
  if (null != arg0) {
    SECOND = null;
    if (!tmp) {
      SECOND = DurationsDefault.Millis.SECOND;
    }
  }
  tmp6(tmp3, SECOND);
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp4;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return formatLimitedOfferTimeLeft(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  [r10022, importDefault] = react.useState(tmp4);
  _slicedToArray(react.useState(tmp4), 2);
  if (cResult[2] !== arg0) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
    cResult[2] = arg0;
    cResult[3] = L;
  } else {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  const tmp7 = useIntervalDefault;
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  tmp7(L, null);
  if (undefined === arg1 || arg1) {
    class L {
      constructor() {
        importDefault(formatLimitedOfferTimeLeft(closure_0));
      }
    }
  }
  return null;
}) : ((arg0) => {
  let closure_1;
  let first;
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  importDefault = undefined;
  [first, importDefault] = react.useState(() => formatLimitedOfferTimeLeft(closure_0));
  let num = null;
  const tmp3 = useIntervalDefault;
  if (flag) {
    num = 1000;
  }
  tmp3(() => {
    closure_1(formatLimitedOfferTimeLeft(closure_0));
  }, num);
  let tmp5 = null;
  if (flag) {
    tmp5 = first;
  }
  return tmp5;
});
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export const useIsLimitedOfferExpired = tmp2;
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = tmp3;