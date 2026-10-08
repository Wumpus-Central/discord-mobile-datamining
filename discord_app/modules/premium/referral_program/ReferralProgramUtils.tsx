// === Module 8058: ReferralProgramUtils ===

// Module 8058 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7163 */;

require = fn;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(time) {
  const diff = time - Date.now();
  const result = diff / DurationsDefault.Millis.HOUR;
  if (result > 24) {
    const intl3 = util.intl;
    const obj2 = { numDays: null };
    const _Math3 = Math;
    obj2.numDays = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(util.t["g9s+dA"], obj2);
  } else if (result >= 1) {
    const intl2 = util.intl;
    const obj3 = { numHours: null };
    const _Math2 = Math;
    obj3.numHours = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(util.t.k9v33y, obj3);
  } else {
    const intl = util.intl;
    const obj = { numMinutes: null };
    const _Math = Math;
    obj.numMinutes = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(util.t["/d0GmT"], obj);
  }
  return formatToPlainStringResult;
};
export { useIsReferralProgramEntrypointBadgeAcknowledged };
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  return DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let isReferralTrial = trialOffer.isReferralTrial;
    const _Date = Date;
    const date = new Date(SnowflakeUtilsDefault.extractTimestamp(trialOffer.id));
    const _Date2 = Date;
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
    const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj2);
  }
};
export const markReferralIncentivePopoverSeen = function markReferralIncentivePopoverSeen() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
};
export const useIsReferralProgramPopoverShowable = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsReferralProgramPopoverShowable() {
  const cResult = stateFromStores1(576).c(7);
  let obj = stateFromStores1(576);
  let isEligibleSenderForReferralProgram = stateFromStores1(8059).useIsEligibleSenderForReferralProgram(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReferralTrialStore];
    const fn = function t() {
      return ReferralTrialStore.getReferralsRemaining();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = stateFromStores1(8059);
  const stateFromStores = stateFromStores1(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ReferralTrialStore];
    const fn2 = function u() {
      return ReferralTrialStore.getReminderStateId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = stateFromStores1(504);
  stateFromStores1 = stateFromStores1(504).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserSettingsProtoStore];
    cResult[4] = items2;
  }
  if (cResult[5] !== stateFromStores1) {
    class P {
      constructor() {
        isDismissed = null != closure_0;
        if (isDismissed) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[6]);
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(closure_0(closure_2[7]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = P;
  } else {
    class P {
      constructor() {
        isDismissed = null != closure_0;
        if (isDismissed) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[6]);
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(closure_0(closure_2[7]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
  }
  stateFromStores1(504);
  let tmp17 = null != stateFromStores1;
  if (tmp17) {
    class P {
      constructor() {
        isDismissed = null != closure_0;
        if (isDismissed) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[6]);
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(closure_0(closure_2[7]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      }
    }
    if (isEligibleSenderForReferralProgram) {
      class P {
        constructor() {
          isDismissed = null != closure_0;
          if (isDismissed) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[6]);
            isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(closure_0(closure_2[7]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
          }
          return isDismissed;
        }
      }
    }
    if (isEligibleSenderForReferralProgram) {
      class P {
        constructor() {
          isDismissed = null != closure_0;
          if (isDismissed) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[6]);
            isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(closure_0(closure_2[7]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
          }
          return isDismissed;
        }
      }
      isEligibleSenderForReferralProgram = stateFromStores > 0;
    }
    tmp17 = isEligibleSenderForReferralProgram;
  }
  return tmp17;
}) : (function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = stateFromStores1(8059).useIsEligibleSenderForReferralProgram(false);
  let obj = stateFromStores1(8059);
  const items = [ReferralTrialStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining());
  const obj2 = stateFromStores1(504);
  const items1 = [ReferralTrialStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => ReferralTrialStore.getReminderStateId());
  const obj3 = stateFromStores1(504);
  const items2 = [UserSettingsProtoStore];
  let tmp4 = null != stateFromStores1;
  if (tmp4) {
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = !obj4.useStateFromStores(items2, () => {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
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