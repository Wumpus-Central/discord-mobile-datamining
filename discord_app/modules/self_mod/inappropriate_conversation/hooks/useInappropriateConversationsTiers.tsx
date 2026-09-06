// === Module 10967: useInappropriateConversationsTiers ===

// Module 10967 (useInappropriateConversationsTiers)
import initialize from "initialize" /* 504 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10968 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 10969 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  let obj = SelfModInappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const inappropriateConversationBannerForChannel = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(channel.id, "context-menu-item");
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
        obj = { isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1, isTier2: null };
        let type1;
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        obj.isTier2 = type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        tmp4 = obj;
      }
    }
  }
  return tmp4;
};