// discord_app/modules/premium/referral_program/ReferralProgramUtils.tsx
import emitChanges from "emitChanges";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(arg0) {
  const diff = arg0 - Date.now();
  const result = diff / require("../../../utils/Durations.tsx").Millis.HOUR;
  if (result > 24) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { numDays: null };
    const _Math3 = Math;
    obj[0] = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["g9s+dA"], obj);
  } else if (result >= 1) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { numHours: null };
    const _Math2 = Math;
    obj[0] = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.k9v33y, obj);
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { numMinutes: null };
    const _Math = Math;
    obj[0] = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["/d0GmT"], obj);
  }
  return formatToPlainStringResult;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const result = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  return require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const result = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let tmp = undefined !== trialOffer.referrer_id;
    const _Date = Date;
    const date = new Date(require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(trialOffer.id));
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
    const result = require("../../dismissible_content/DismissibleContentUtils.tsx") /* addVersionedDismissedContent */.markSnowflakeBoundDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj);
    const obj2 = require("../../dismissible_content/DismissibleContentUtils.tsx") /* addVersionedDismissedContent */;
  } else {
    obj = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */;
    const result1 = obj.UNSAFE_markDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
};
export const isReferralProgramPopoverSeen = function isReferralProgramPopoverSeen() {
  return require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
};
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = require("hooks/useIsEligibleSenderForReferralProgram.tsx") /* useIsEligibleSenderForReferralProgram */.useIsEligibleSenderForReferralProgram(false);
  const obj = require("hooks/useIsEligibleSenderForReferralProgram.tsx") /* useIsEligibleSenderForReferralProgram */;
  const items = [emitChanges];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => store.getReferralsRemaining());
  const obj2 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items1 = [emitChanges];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => store.getReminderStateId());
  const obj3 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  if (obj4.useIsReferralReminderDCExperimentEnabled({ location: "ReferralProgramUtils" })) {
    let tmp8 = null != stateFromStores1;
    if (tmp8) {
      let tmpResult = tmp(4101);
      tmp8 = !tmpResult.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1358).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, stateFromStores1).isDismissed;
    }
    let tmp6 = tmp8;
  } else {
    tmpResult = tmp(4101);
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