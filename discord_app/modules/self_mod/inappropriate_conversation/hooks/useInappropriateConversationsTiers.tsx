// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel.tsx";
import InappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import closure_2 from "../../../../stores/UserStore.tsx";
import { SafetyWarningTypes } from "../../ChannelSafetyWarningsStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = function useInappropriateConversationsTiers(channel) {
  let obj = InappropriateConversationExperiment;
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = initialize;
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