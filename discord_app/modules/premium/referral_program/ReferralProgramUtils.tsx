// === Module 8055: ReferralProgramUtils ===

// Module 8055 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1945 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8056 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(time) {
  const diff = time - Date.now();
  const result = diff / DurationsDefault.Millis.HOUR;
  if (result > 24) {
    const intl3 = util.intl;
    let obj = { numDays: null };
    const _Math3 = Math;
    obj.numDays = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(util.t["g9s+dA"], obj);
  } else if (result >= 1) {
    const intl2 = util.intl;
    obj = { numHours: null };
    const _Math2 = Math;
    obj.numHours = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(util.t.k9v33y, obj);
  } else {
    const intl = util.intl;
    obj = { numMinutes: null };
    const _Math = Math;
    obj.numMinutes = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(util.t["/d0GmT"], obj);
  }
  return formatToPlainStringResult;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
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
    let obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj);
  } else {
    obj = DismissibleContentUnsafeUtils;
    const result1 = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
};
export const isReferralProgramPopoverSeen = function isReferralProgramPopoverSeen() {
  return DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
};
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = useIsEligibleSenderForReferralProgram.useIsEligibleSenderForReferralProgram(false);
  const items = [ReferralTrialStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining());
  const items1 = [ReferralTrialStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => ReferralTrialStore.getReminderStateId());
  if (obj4.useIsReferralReminderDCExperimentEnabled({ location: "ReferralProgramUtils" })) {
    let tmp8 = null != stateFromStores1;
    if (tmp8) {
      let tmpResult = tmp(4380);
      tmp8 = !tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1943).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, stateFromStores1).isDismissed;
    }
    let tmp6 = tmp8;
  } else {
    tmpResult = tmp(4380);
    tmp6 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1943).DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = tmp6;
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = null != stateFromStores;
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = stateFromStores > 0;
  }
  return isEligibleSenderForReferralProgram;
};