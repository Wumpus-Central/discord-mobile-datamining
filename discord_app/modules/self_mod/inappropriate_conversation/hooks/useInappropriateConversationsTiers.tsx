// === Module 10716: useInappropriateConversationsTiers ===

// Module 10716 (useInappropriateConversationsTiers)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 9804 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9805 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const SafetyWarningTypes = fn(9799).SafetyWarningTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx");

export const useInappropriateConversationsTiers = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "context-menu-item" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class I {
      constructor() {
        return closure_1_2.getCurrentUser();
      }
    }
    cResult[1] = items;
    cResult[2] = I;
    let tmp7 = I;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const tmpResult = SelfModInappropriateConversationExperiment;
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  const tmpResult3 = initialize;
  const inappropriateConversationBannerForChannel = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(id.id, "context-menu-item");
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
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        if (cResult[3] === type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1) {
          if (cResult[4] === tmp15) {
            let tmp16 = cResult[5];
          }
          return tmp16;
        }
        const obj3 = { isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1, isTier2: type1 === tmp12.INAPPROPRIATE_CONVERSATION_TIER_2 };
        cResult[3] = type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
        cResult[4] = type1 === tmp12.INAPPROPRIATE_CONVERSATION_TIER_2;
        cResult[5] = obj3;
        tmp16 = obj3;
      }
    }
  }
  return null;
}) : ((id) => {
  const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "context-menu-item" });
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const inappropriateConversationBannerForChannel = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(id.id, "context-menu-item");
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
        const obj3 = { isTier1: type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1, isTier2: null };
        let type1;
        if (inappropriateConversationBannerForChannel != null) {
          type1 = inappropriateConversationBannerForChannel.type;
        }
        obj3.isTier2 = type1 === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2;
        tmp4 = obj3;
      }
    }
  }
  return tmp4;
});