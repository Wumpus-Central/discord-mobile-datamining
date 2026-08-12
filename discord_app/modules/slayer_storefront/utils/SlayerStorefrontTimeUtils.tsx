// discord_app/modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { t } from "../../../../_runtime/03943_t.js";
import { useInterval } from "../../../hooks/useInterval.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../intl/SlayerStorefront.messages.js";

const require = arg1;
function getLimitedOfferTimeLeft(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const diffResult = t(arg0).diff(t(), "seconds");
    let tmp4 = null;
    if (diffResult > 0) {
      const obj = { days: null, hours: null, minutes: null, seconds: null };
      const _Math = Math;
      obj[0] = Math.floor(diffResult / tmp5(687).Seconds.DAY);
      const _Math2 = Math;
      const result = diffResult % tmp5(687).Seconds.DAY;
      obj[1] = Math.floor(result / tmp5(687).Seconds.HOUR);
      const _Math3 = Math;
      const result1 = diffResult % tmp5(687).Seconds.HOUR;
      obj[2] = Math.floor(result1 / tmp5(687).Seconds.MINUTE);
      obj[3] = diffResult % tmp5(687).Seconds.MINUTE;
      tmp4 = obj;
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
    ({ days, hours } = tmp);
    if (days > 0) {
      const intl3 = getSystemLocale.intl;
      let obj = { days: null };
      obj[0] = days;
      let formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.BXpdIg, obj);
    } else if (hours > 0) {
      const intl2 = getSystemLocale.intl;
      obj = { hours: null };
      obj[0] = hours;
      formatToPlainStringResult = intl2.formatToPlainString(messagesProxy.PPaJSw, obj);
    } else {
      const intl = getSystemLocale.intl;
      obj = { minutes: null };
      const _Math = Math;
      obj[0] = Math.max(tmp12, 1);
      formatToPlainStringResult = intl.formatToPlainString(messagesProxy["7Z+aIf"], obj);
    }
    return formatToPlainStringResult;
  }
}
let result = require("t").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontTimeUtils.tsx");

export { getLimitedOfferTimeLeft };
export { formatLimitedOfferTimeLeft };
export const useTickingFormattedLimitedOfferTimeLeft = function useTickingFormattedLimitedOfferTimeLeft(endDate) {
  let closure_0 = endDate;
  const tmp = callback(React.useState(() => outer1_6(closure_0)), 2);
  const importDefault = tmp[1];
  useInterval(() => {
    callback(outer1_6(closure_0));
  }, 1000);
  return tmp[0];
};