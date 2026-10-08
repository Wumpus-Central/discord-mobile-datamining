// === Module 6800: GuildOnboardingModal ===

// Module 6800 (GuildOnboardingModal)
import router_utils from "router_utils" /* 1112 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6127 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6783 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6784 */;
import GuildOnboardingPromptsDefault from "GuildOnboardingPrompts" /* 6801 */;
import GuildOnboardingPrompt from "GuildOnboardingPrompt" /* 6802 */;
import GuildOnboardingConnectionPromptDefault from "GuildOnboardingConnectionPrompt" /* 6838 */;
import GuildOnboardingCompletedDefault from "GuildOnboardingCompleted" /* 6866 */;
import noop from "module_19" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 6153 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6778 */;

require = fn;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
function getScreens(guildId) {
  guildId = guildId.guildId;
  ({ prompts: importDefault, connections, selectOption: dependencyMap, completeOnboarding: noop, onFinish: MemberVerificationFormStore, onClose: ChannelStore, landingAnimation: GuildStore, isFirstOpen: SelectedChannelStore, backShouldLeaveGuild: GuildOnboardingPromptsStore } = guildId);
  constants = GuildStore.getGuild(guildId);
  const rulesPrompt = MemberVerificationFormStore.getRulesPrompt(guildId);
  let obj = { [closure_9.PROMPT]: obj2 };
  const obj3 = {
    fullscreen: true,
    headerTitle,
    headerRight,
    headerLeft: guildId(6203).getHeaderCloseButton(() => {
      if (backShouldLeaveGuild) {
        let tmp4 = onClose;
        let channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
        if (null == channel) {
          router_utils.transitionTo(closure_2_11.ME, { navigationReplace: true });
          tmp4 = tmp4();
        }
        channel = router_utils.transitionTo(closure_2_11.CHANNEL(channel.guild_id, channel.id));
      } else {
        onClose();
      }
    }),
    render() {
      const obj = { guildId, isLastStep: null, onComplete: null };
      let tmp4 = 0 === prompts.length;
      if (tmp4) {
        tmp4 = !GuildOnboardingUtils.showRulesInOnboarding(closure_9, closure_10);
      }
      obj.isLastStep = tmp4;
      obj.onComplete = onComplete;
      return jsx(GuildOnboardingConnectionPromptDefault, { guildId, isLastStep: null, onComplete: null });
    }
  };
  obj[constants.CONNECTIONS] = obj3;
  obj[constants.COMPLETED] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingCompletedDefault, {
        guildId,
        prompts,
        completeOnboarding,
        onClose() {
          onClose();
          closure_1_4();
        }
      });
    }
  };
  obj[constants.RULES] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingPrompt.RulesPrompt, { guildId, onClose });
    }
  };
  return obj;
}
let constants = fn(6775).GuildOnboardingModalStates;
const Constants = fn(1085);
({ GuildFeatures: c10, Routes: closure_11 } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildOnboardingModal(guildId) {
  const cResult = guildId(stateFromStoresArray[17]).c(33);
  guildId = guildId.guildId;
  ({ onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      guild = GuildStore.getGuild(guildId);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        let hasItem = features.has(constants2.MEMBER_VERIFICATION_GATE_ENABLED);
        if (hasItem) {
          const features2 = guild.features;
          hasItem = !features2.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        tmp2 = hasItem;
      }
      return tmp2;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(stateFromStoresArray[17]);
  const stateFromStores = guildId(stateFromStoresArray[18]).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function v() {
      return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = guildId(stateFromStoresArray[18]);
  stateFromStoresArray = guildId(stateFromStoresArray[18]).useStateFromStoresArray(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildOnboardingPromptsStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== guildId) {
    const fn3 = function _() {
      return GuildOnboardingPromptsStore.getOnboardingConnections(guildId);
    };
    cResult[7] = guildId;
    cResult[8] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult3 = guildId(stateFromStoresArray[18]);
  const stateFromStores1 = guildId(stateFromStoresArray[18]).useStateFromStores(tmp12, tmp14);
  if (cResult[9] !== guildId) {
    class N {
      constructor(arg0, arg1, arg2) {
        obj = closure_1(closure_2[19]);
        option = obj.selectOption(guildId, guildId, arg1, arg2);
        return;
      }
    }
    cResult[9] = guildId;
    cResult[10] = N;
  } else {
    class N {
      constructor(arg0, arg1, arg2) {
        obj = closure_1(closure_2[19]);
        option = obj.selectOption(guildId, guildId, arg1, arg2);
        return;
      }
    }
  }
  if (cResult[11] === guildId) {
    class N {
      constructor(arg0, arg1, arg2) {
        obj = closure_1(closure_2[19]);
        option = obj.selectOption(guildId, guildId, arg1, arg2);
        return;
      }
    }
    if (cResult[14] === guildId) {
      class N {
        constructor(arg0, arg1, arg2) {
          obj = closure_1(closure_2[19]);
          option = obj.selectOption(guildId, guildId, arg1, arg2);
          return;
        }
      }
      const effect = noop.useEffect(tmp19, tmp18);
      if (cResult[18] === backShouldLeaveGuild) {
        class N {
          constructor(arg0, arg1, arg2) {
            obj = closure_1(closure_2[19]);
            option = obj.selectOption(guildId, guildId, arg1, arg2);
            return;
          }
        }
      }
      const obj2 = { guildId, prompts: stateFromStoresArray, connections: stateFromStores1, selectOption: N, completeOnboarding: L, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild };
      const tmp24 = getScreens(obj2);
      cResult[18] = backShouldLeaveGuild;
      cResult[19] = L;
      cResult[20] = stateFromStores1;
      cResult[21] = guildId;
      cResult[22] = isFirstOpen;
      cResult[23] = landingAnimation;
      cResult[24] = onClose;
      cResult[25] = onFinish;
      cResult[26] = stateFromStoresArray;
      cResult[27] = N;
      class L {
        constructor() {
          obj = closure_1(closure_2[19]);
          completeOnboardingResult = obj.completeOnboarding(guildId, closure_2);
          return;
        }
      }
      cResult[28] = tmp24;
    }
    const fn4 = function k() {
      if (stateFromStores) {
        const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
      }
    };
    const items3 = [guildId, stateFromStores];
    cResult[14] = guildId;
    cResult[15] = stateFromStores;
    cResult[16] = items3;
    cResult[17] = fn4;
    tmp18 = items3;
    tmp19 = fn4;
  }
  class L {
    constructor() {
      obj = closure_1(closure_2[19]);
      completeOnboardingResult = obj.completeOnboarding(guildId, closure_2);
      return;
    }
  }
  cResult[11] = guildId;
  cResult[12] = stateFromStoresArray;
  cResult[13] = L;
  const tmpResult4 = guildId(stateFromStoresArray[18]);
}) : (function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let stateFromStores1;
  const items = [stateFromStores];
  stateFromStores = guildId(onClose[18]).useStateFromStores(items, () => {
    guild = GuildStore.getGuild(guildId);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let hasItem = features.has(constants2.MEMBER_VERIFICATION_GATE_ENABLED);
      if (hasItem) {
        const features2 = guild.features;
        hasItem = !features2.has(constants2.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      tmp2 = hasItem;
    }
    return tmp2;
  });
  let obj = guildId(onClose[18]);
  const items1 = [stateFromStores1];
  const stateFromStoresArray = guildId(onClose[18]).useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  const obj2 = guildId(onClose[18]);
  const items2 = [stateFromStores1];
  stateFromStores1 = guildId(onClose[18]).useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const items3 = [guildId];
  const selectOption = landingAnimation.useCallback((arg0, arg1, arg2) => {
    const option = GuildOnboardingActionCreatorsDefault.selectOption(guildId, arg0, arg1, arg2);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  const callback1 = landingAnimation.useCallback(() => {
    GuildOnboardingActionCreatorsDefault.completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = landingAnimation.useEffect(() => {
    if (stateFromStores) {
      const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    }
  }, items5);
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, selectOption, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    if (stateFromStores1.length > 0) {
      let PROMPT = selectOption.CONNECTIONS;
    }
    const obj4 = { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null };
    const intl = tmp(tmp2[21]).intl;
    obj4.headerBackTitle = intl.string(tmp(tmp2[21]).t["13/7kX"]);
    return jsx(tmp(tmp2[22]).Navigator, { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null });
  }
  PROMPT = selectOption.PROMPT;
  const obj3 = guildId(onClose[18]);
});