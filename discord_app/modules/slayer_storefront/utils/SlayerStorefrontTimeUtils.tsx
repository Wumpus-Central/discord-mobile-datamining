// discord_app/modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3584 from "../intl/SlayerStorefront.messages.js";
import _modDef4450 from "../../../../_runtime/metro/04450__.js";
import useIntervalDefault from "../../../hooks/useInterval.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = _modDef4450(arg0).diff(_modDef4450(), "seconds");
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
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3584.PPaJSw, obj3);
    } else {
      const intl = util.intl;
      const obj = { minutes: null };
      const _Math = Math;
      obj.minutes = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(_modDef3584["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export const useIsLimitedOfferExpired = function useIsLimitedOfferExpired(arg0) {
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
  useIntervalDefault(
    _slicedToArray(
      noop.useReducer((arg0) => arg0 + 1, 0),
      2,
    )[1],
    SECOND,
  );
  return tmp;
};
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  closure_0 = endDate;
  let flag = enabled;
  if (enabled === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(
    noop.useState(() => formatLimitedOfferTimeLeft(closure_0)),
    2,
  );
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
};
