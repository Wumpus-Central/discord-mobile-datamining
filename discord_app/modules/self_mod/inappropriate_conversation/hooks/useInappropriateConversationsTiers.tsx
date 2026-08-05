// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("InappropriateConversationExperiment").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  let obj = require("../SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const inappropriateConversationBannerForChannel = require("useInappropriateConversationBannerForChannel.tsx") /* useInappropriateConversationBannerForChannel */.useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmp4 = null;
  if (true === isStaffResult) {
    tmp4 = null;
    if (isEligibleForInappropriateConversationWarning) {
      tmp4 = null;
      if (channel.isDM()) {
        let type;
        if (inappropriateConversationBannerForChannel != null) {
          type = inappropriateConversationBannerForChannel.type;
        }
        obj = { isTier1: null, isTier2: null };
        obj[0] = type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
        let type1;
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        obj[1] = type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        tmp4 = obj;
        const tmp6 = SafetyWarningTypes;
      }
    }
  }
  return tmp4;
};