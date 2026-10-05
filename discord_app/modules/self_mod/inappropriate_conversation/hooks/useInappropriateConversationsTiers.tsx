// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel.tsx";
import SelfModInappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let currentUser;
      let first;
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "context-menu-item" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = SelfModInappropriateConversationExperiment;
      const isEligibleForInappropriateConversationWarning =
        tmpResult.useIsEligibleForInappropriateConversationWarning(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class I {
          constructor() {
            return closure_1_2.getCurrentUser();
          }
        }
        cResult[1] = items;
        cResult[2] = I;
        tmp7 = I;
        tmp6 = items;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores = tmpResult3.useStateFromStores(tmp6, tmp7);
      const tmpResult4 = useInappropriateConversationBannerForChannel;
      const inappropriateConversationBannerForChannel = tmpResult4.useInappropriateConversationBannerForChannel(
        id.id,
        "context-menu-item",
      );
      let isStaffResult;
      if (stateFromStores != null) {
        isStaffResult = stateFromStores.isStaff();
      }
      if (true === isStaffResult) {
        if (isEligibleForInappropriateConversationWarning) {
          if (id.isDM()) {
            let type;
            if (inappropriateConversationBannerForChannel != null) {
              type = inappropriateConversationBannerForChannel.type;
            }
            let type1;
            class I {
              constructor() {
                return closure_1_2.getCurrentUser();
              }
            }
            const INAPPROPRIATE_CONVERSATION_TIER_1 = SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
            if (inappropriateConversationBannerForChannel != null) {
              type1 = inappropriateConversationBannerForChannel.type;
            }
            if ((cResult[3] === type) === INAPPROPRIATE_CONVERSATION_TIER_1) {
              let tmp16;
              if ((cResult[4] === type1) === tmp12.INAPPROPRIATE_CONVERSATION_TIER_2) {
                tmp16 = cResult[5];
              }
              return tmp16;
            }
            const obj3 = {
              isTier1: type === INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: type1 === tmp12.INAPPROPRIATE_CONVERSATION_TIER_2,
            };
            cResult[3] = type === INAPPROPRIATE_CONVERSATION_TIER_1;
            cResult[4] = type1 === tmp12.INAPPROPRIATE_CONVERSATION_TIER_2;
            cResult[5] = obj3;
            tmp16 = obj3;
          }
        }
      }
      return null;
    }
  : (id) => {
      let currentUser;
      let type1;
      const obj = SelfModInappropriateConversationExperiment;
      const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({
        location: "context-menu-item",
      });
      const items = [UserStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj4 = useInappropriateConversationBannerForChannel;
      const inappropriateConversationBannerForChannel = obj4.useInappropriateConversationBannerForChannel(
        id.id,
        "context-menu-item",
      );
      let isStaffResult;
      if (stateFromStores != null) {
        isStaffResult = stateFromStores.isStaff();
      }
      let tmp4 = null;
      if (true === isStaffResult) {
        tmp4 = null;
        if (isEligibleForInappropriateConversationWarning) {
          tmp4 = null;
          if (id.isDM()) {
            let type;
            if (inappropriateConversationBannerForChannel != null) {
              type = inappropriateConversationBannerForChannel.type;
            }
            const obj3 = {
              isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1,
              isTier2: type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            };
            type1 = undefined;
            if (inappropriateConversationBannerForChannel != null) {
              type1 = inappropriateConversationBannerForChannel.type;
            }
            tmp4 = obj3;
          }
        }
      }
      return tmp4;
    };
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx",
);

export const useInappropriateConversationsTiers = tmp2;
