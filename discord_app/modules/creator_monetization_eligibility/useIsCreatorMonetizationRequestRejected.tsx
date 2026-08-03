import { CreatorMonetizationApplicationState as closure_2 } from "CreatorMonetizationApplicationState";

const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx");

export default function useIsCreatorMonetizationRequestRejected(latestRequest) {
  let state;
  if (latestRequest != null) {
    latestRequest = latestRequest.latestRequest;
    if (latestRequest != null) {
      state = latestRequest.state;
    }
  }
  let obj = { isApplicationRejected: state === constants.REJECTED, requestCooldownDuration: null };
  let can_reapply_at;
  if (latestRequest != null) {
    const rejection = latestRequest.rejection;
    if (rejection != null) {
      can_reapply_at = rejection.can_reapply_at;
    }
  }
  if (null != can_reapply_at) {
    let roundResult = globalThis;
    const _Date = Date;
    const parsed = Date.parse(can_reapply_at);
    const _Date2 = Date;
    const timestamp = Date.now();
    const _isNaN = isNaN;
    if (!isNaN(parsed)) {
      if (parsed >= timestamp) {
        const _Math = Math;
        const rounded = Math.round((parsed - timestamp) / 60000);
        let num2 = 43200;
        if (rounded >= 43200) {
          const intl5 = require(1236) /* getSystemLocale */.intl;
          obj = { months: null };
          const _Math5 = roundResult.Math;
          num2 = rounded / num2;
          roundResult = _Math5.round(num2);
          obj[0] = roundResult;
          let formatToPlainStringResult = intl5.formatToPlainString(require(1236) /* getSystemLocale */.t.kridzK, obj);
        } else if (rounded >= 10080) {
          const intl4 = require(1236) /* getSystemLocale */.intl;
          obj = { weeks: null };
          const _Math4 = Math;
          obj[0] = Math.round(rounded / 10080);
          formatToPlainStringResult = intl4.formatToPlainString(require(1236) /* getSystemLocale */.t.EmoBD2, obj);
        } else if (rounded >= 1440) {
          const intl3 = require(1236) /* getSystemLocale */.intl;
          const obj1 = { days: null };
          const _Math3 = Math;
          obj1[0] = Math.round(rounded / 1440);
          formatToPlainStringResult = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t["k2UNz+"], obj1);
        } else if (rounded >= 60) {
          const intl2 = require(1236) /* getSystemLocale */.intl;
          const obj2 = { hours: null };
          const _Math2 = Math;
          obj2[0] = Math.round(rounded / 60);
          formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.xCjYxK, obj2);
        } else {
          const intl = require(1236) /* getSystemLocale */.intl;
          const obj3 = { minutes: null };
          obj3[0] = rounded;
          formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.iXLF9W, obj3);
        }
      }
    }
  }
  obj[1] = undefined;
  return obj;
};