import emitChanges from "emitChanges";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(arg0) {
  const diff = arg0 - Date.now();
  const result = diff / importDefault(687).Millis.HOUR;
  if (result > 24) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let obj = { numDays: null };
    const _Math3 = Math;
    obj[0] = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t["g9s+dA"], obj);
  } else if (result >= 1) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj = { numHours: null };
    const _Math2 = Math;
    obj[0] = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.k9v33y, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { numMinutes: null };
    const _Math = Math;
    obj[0] = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["/d0GmT"], obj);
  }
  return formatToPlainStringResult;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return require(4009) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const result = require(4009) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  return require(4009) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const result = require(4009) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let tmp = undefined !== trialOffer.referrer_id;
    const _Date = Date;
    const date = new Date(importDefault(11).extractTimestamp(trialOffer.id));
    const _Date2 = Date;
    const date1 = new Date();
    if (tmp) {
      tmp = undefined === trialOffer.redeemed_at;
    }
    if (tmp) {
      tmp = date1 >= date;
    }
    return tmp;
  }
};
export const markReferralProgramPopoverSeen = function markReferralProgramPopoverSeen(promotionId) {
  if (null != promotionId) {
    let obj = { dismissAction: null };
    obj[0] = ContentDismissActionType.INDIRECT_ACTION;
    const result = require(1360) /* addVersionedDismissedContent */.markSnowflakeBoundDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj);
    const obj2 = require(1360) /* addVersionedDismissedContent */;
  } else {
    obj = require(4009) /* UNSAFE_isDismissibleContentDismissed */;
    const result1 = obj.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
};
export const isReferralProgramPopoverSeen = function isReferralProgramPopoverSeen() {
  return require(4009) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
};
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = require(7842) /* useIsEligibleSenderForReferralProgram */.useIsEligibleSenderForReferralProgram(false);
  const obj = require(7842) /* useIsEligibleSenderForReferralProgram */;
  const items = [emitChanges];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => store.getReferralsRemaining());
  const obj2 = require(589) /* initialize */;
  const items1 = [emitChanges];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => store.getReminderStateId());
  const obj3 = require(589) /* initialize */;
  if (obj4.useIsReferralReminderDCExperimentEnabled({ location: "ReferralProgramUtils" })) {
    let tmp8 = null != stateFromStores1;
    if (tmp8) {
      let tmpResult = tmp(4009);
      tmp8 = !tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1358).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, stateFromStores1).isDismissed;
    }
    let tmp6 = tmp8;
  } else {
    tmpResult = tmp(4009);
    tmp6 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1358).DismissibleContent.REFERRAL_PROGRAM_POPOVER);
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