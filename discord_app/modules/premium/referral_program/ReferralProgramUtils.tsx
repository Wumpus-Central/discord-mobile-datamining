// === Module 8318: ReferralProgramUtils ===

// Module 8318 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1091 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2030 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4577 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7697 */;

require = fn;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

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
    const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj2);
  }
};
export const markReferralIncentivePopoverSeen = function markReferralIncentivePopoverSeen() {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
};
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = stateFromStores1(8319).useIsEligibleSenderForReferralProgram(false);
  let obj = stateFromStores1(8319);
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
};