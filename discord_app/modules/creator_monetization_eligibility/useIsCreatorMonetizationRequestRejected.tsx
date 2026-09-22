// === Module 18184: useIsCreatorMonetizationRequestRejected ===

// Module 18184 (useIsCreatorMonetizationRequestRejected)
import util from "util" /* 1115 */;
import CreatorMonetizationEligibilityConstants from "CreatorMonetizationEligibilityConstants" /* 18153 */;
import size from "module_2" /* 2 */;

const constants = CreatorMonetizationEligibilityConstants.CreatorMonetizationApplicationState;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx");

export default function useIsCreatorMonetizationRequestRejected(latestRequest) {
  let state;
  if (latestRequest != null) {
    latestRequest = latestRequest.latestRequest;
    if (latestRequest != null) {
      state = latestRequest.state;
    }
  }
  const obj = { isApplicationRejected: state === constants.REJECTED, requestCooldownDuration: null };
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
          const intl5 = util.intl;
          const obj2 = { months: null };
          const _Math5 = roundResult.Math;
          num2 = rounded / num2;
          roundResult = _Math5.round(num2);
          obj2.months = roundResult;
          let formatToPlainStringResult = intl5.formatToPlainString(util.t.kridzK, obj2);
        } else if (rounded >= 10080) {
          const intl4 = util.intl;
          const obj3 = { weeks: null };
          const _Math4 = Math;
          obj3.weeks = Math.round(rounded / 10080);
          formatToPlainStringResult = intl4.formatToPlainString(util.t.EmoBD2, obj3);
        } else if (rounded >= 1440) {
          const intl3 = util.intl;
          const obj4 = { days: null };
          const _Math3 = Math;
          obj4.days = Math.round(rounded / 1440);
          formatToPlainStringResult = intl3.formatToPlainString(util.t["k2UNz+"], obj4);
        } else if (rounded >= 60) {
          const intl2 = util.intl;
          const obj5 = { hours: null };
          const _Math2 = Math;
          obj5.hours = Math.round(rounded / 60);
          formatToPlainStringResult = intl2.formatToPlainString(util.t.xCjYxK, obj5);
        } else {
          const intl = util.intl;
          const obj6 = { minutes: rounded };
          formatToPlainStringResult = intl.formatToPlainString(util.t.iXLF9W, obj6);
        }
      }
    }
  }
  obj.requestCooldownDuration = undefined;
  return obj;
};