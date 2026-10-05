// === Module 17910: useIsCreatorMonetizationRequestRejected ===

// Module 17910 (useIsCreatorMonetizationRequestRejected)
import intl6 from "intl" /* 1126 */;
import CreatorMonetizationEligibilityConstants from "CreatorMonetizationEligibilityConstants" /* 17879 */;
import size from "module_2" /* 2 */;

const constants = CreatorMonetizationEligibilityConstants.CreatorMonetizationApplicationState;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx");

export default function useIsCreatorMonetizationRequestRejected(latestRequest) {
  let tmp3;
  let state;
  if (latestRequest != null) {
    latestRequest = latestRequest.latestRequest;
    if (latestRequest != null) {
      state = latestRequest.state;
    }
  }
  let can_reapply_at;
  const obj = { isApplicationRejected: state === constants.REJECTED, requestCooldownDuration: tmp3 };
  if (latestRequest != null) {
    const rejection = latestRequest.rejection;
    if (rejection != null) {
      can_reapply_at = rejection.can_reapply_at;
    }
  }
  tmp3 = undefined;
  if (null != can_reapply_at) {
    const _Date = Date;
    const parsed = Date.parse(can_reapply_at);
    const _Date2 = Date;
    const timestamp = Date.now();
    const _isNaN = isNaN;
    if (!isNaN(parsed)) {
      if (parsed >= timestamp) {
        let formatToPlainString4Result;
        const _Math = Math;
        const rounded = Math.round((parsed - timestamp) / 60000);
        if (rounded >= 43200) {
          const intl5 = intl6.intl;
          const formatToPlainString4 = intl5.formatToPlainString;
          const _Math5 = Math;
          const obj2 = { months: Math.round(rounded / 43200) };
          const kridzK = intl6.t.kridzK;
          formatToPlainString4Result = formatToPlainString4(kridzK, obj2);
        } else if (rounded >= 10080) {
          const intl4 = intl6.intl;
          const formatToPlainString3 = intl4.formatToPlainString;
          const _Math4 = Math;
          const obj3 = { weeks: Math.round(rounded / 10080) };
          const EmoBD2 = intl6.t.EmoBD2;
          formatToPlainString4Result = formatToPlainString3(EmoBD2, obj3);
        } else if (rounded >= 1440) {
          const intl3 = intl6.intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const _Math3 = Math;
          const obj4 = { days: Math.round(rounded / 1440) };
          const prop = intl6.t["k2UNz+"];
          formatToPlainString4Result = formatToPlainString2(prop, obj4);
        } else if (rounded >= 60) {
          const intl2 = intl6.intl;
          const formatToPlainString = intl2.formatToPlainString;
          const _Math2 = Math;
          const obj5 = { hours: Math.round(rounded / 60) };
          const xCjYxK = intl6.t.xCjYxK;
          formatToPlainString4Result = formatToPlainString(xCjYxK, obj5);
        } else {
          const intl = intl6.intl;
          const obj6 = { minutes: rounded };
          formatToPlainString4Result = intl.formatToPlainString(intl6.t.iXLF9W, obj6);
        }
        tmp3 = formatToPlainString4Result;
      }
    }
  }
  return obj;
};