// === Module 7726: ReferralProgramUtils ===

// Module 7726 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1102 */;
import intl4 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6961 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let fn = () => {
  const obj = DismissibleContentUnsafeUtils;
  return obj.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores1;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = stateFromStores1;
  let obj = stateFromStores1(576);
  const cResult = obj.c(7);
  const obj2 = stateFromStores1(7727);
  let isEligibleSenderForReferralProgram = obj2.useIsEligibleSenderForReferralProgram(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    const fn = function o() {
      return ReferralTrialStore.getReferralsRemaining();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ReferralTrialStore];
    const fn2 = function u() {
      return ReferralTrialStore.getReminderStateId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserSettingsProtoStore];
    cResult[4] = items2;
  }
  if (cResult[5] !== stateFromStores1) {
    class E {
      constructor() {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          const obj = DismissibleContentUnsafeUtils;
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = E;
  } else {
    class E {
      constructor() {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          const obj = DismissibleContentUnsafeUtils;
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
  }
  tmp(504);
  let tmp17 = null != stateFromStores1;
  if (tmp17) {
    class E {
      constructor() {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          const obj = DismissibleContentUnsafeUtils;
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
    if (isEligibleSenderForReferralProgram) {
      class E {
        constructor() {
          let isDismissed = null != stateFromStores1;
          if (isDismissed) {
            const obj = DismissibleContentUnsafeUtils;
            isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
          }
          return isDismissed;
        }
      }
    }
    if (isEligibleSenderForReferralProgram) {
      class E {
        constructor() {
          let isDismissed = null != stateFromStores1;
          if (isDismissed) {
            const obj = DismissibleContentUnsafeUtils;
            isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
          }
          return isDismissed;
        }
      }
      isEligibleSenderForReferralProgram = stateFromStores > 0;
    }
    tmp17 = isEligibleSenderForReferralProgram;
  }
  return tmp17;
}) : (() => {
  let stateFromStores1;
  let obj = stateFromStores1(7727);
  let isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram(false);
  const items = [ReferralTrialStore];
  const obj2 = stateFromStores1(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining());
  const items1 = [ReferralTrialStore];
  const obj3 = stateFromStores1(504);
  stateFromStores1 = obj3.useStateFromStores(items1, () => ReferralTrialStore.getReminderStateId());
  const items2 = [UserSettingsProtoStore];
  let tmp4 = null != stateFromStores1;
  const obj4 = stateFromStores1(504);
  if (tmp4) {
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = !obj4.useStateFromStores(items2, () => {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          const obj = DismissibleContentUnsafeUtils;
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      });
    }
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = null != stateFromStores;
    }
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = stateFromStores > 0;
    }
    tmp4 = isEligibleSenderForReferralProgram;
  }
  return tmp4;
});
const result1 = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(time) {
  let formatToPlainString3Result;
  const diff = time - Date.now();
  const result = diff / DurationsDefault.Millis.HOUR;
  if (result > 24) {
    const intl3 = intl4.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const _Math3 = Math;
    const obj2 = { numDays: Math.floor(result / 24) };
    const prop = intl4.t["g9s+dA"];
    formatToPlainString3Result = formatToPlainString3(prop, obj2);
  } else if (result >= 1) {
    const intl2 = intl4.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const _Math2 = Math;
    const obj3 = { numHours: Math.floor(result) };
    const k9v33y = intl4.t.k9v33y;
    formatToPlainString3Result = formatToPlainString2(k9v33y, obj3);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj = { numMinutes: Math.floor(60 * result) };
    const prop1 = intl4.t["/d0GmT"];
    formatToPlainString3Result = formatToPlainString(prop1, obj);
  }
  return formatToPlainString3Result;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = fn;
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  return obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let isReferralTrial = trialOffer.isReferralTrial;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const tmp = !trialOffer.isRedeemed;
    const obj = SnowflakeUtilsDefault;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(obj.extractTimestamp(trialOffer.id));
    const date1 = new Date();
    if (isReferralTrial) {
      isReferralTrial = tmp;
    }
    if (isReferralTrial) {
      isReferralTrial = date1 >= date;
    }
    return isReferralTrial;
  }
};
export const markReferralProgramPopoverSeen = function markReferralProgramPopoverSeen(promotionId) {
  if (null != promotionId) {
    const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const obj = DismissibleContentUtils;
    const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj2);
  }
};
export const markReferralIncentivePopoverSeen = function markReferralIncentivePopoverSeen() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
};
export const useIsReferralProgramPopoverShowable = tmp3;