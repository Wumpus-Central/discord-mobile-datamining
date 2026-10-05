// discord_app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import router_utils from "../../routing/router_utils.tsx";
import MemberVerificationActionCreatorsDefault from "../../guild_member_verification/MemberVerificationActionCreators.tsx";
import GuildOnboardingConstants from "GuildOnboardingConstants.tsx";
import GuildOnboardingActionCreatorsDefault from "../GuildOnboardingActionCreators.tsx";
import GuildOnboardingUtils from "../GuildOnboardingUtils.tsx";
import GuildOnboardingPromptsDefault from "GuildOnboardingPrompts.tsx";
import GuildOnboardingPrompt from "GuildOnboardingPrompt.tsx";
import GuildOnboardingConnectionPromptDefault from "GuildOnboardingConnectionPrompt.tsx";
import GuildOnboardingCompletedDefault from "GuildOnboardingCompleted.tsx";
import react from "../../../../_runtime/00019_react.js";
import MemberVerificationFormStore from "../../guild_member_verification/MemberVerificationFormStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let unpackModuleId;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
function getScreens(guildId) {
  let backShouldLeaveGuild;
  let closure_10;
  let closure_9;
  let connections;
  let isFirstOpen;
  let landingAnimation;
  let obj2;
  let obj4;
  let onClose;
  let prompts;
  let selectOption;
  guildId = guildId.guildId;
  ({
    prompts: importDefault,
    connections,
    selectOption: dependencyMap,
    completeOnboarding: react,
    onFinish: MemberVerificationFormStore,
    onClose: ChannelStore,
    landingAnimation: GuildStore,
    isFirstOpen: SelectedChannelStore,
    backShouldLeaveGuild: GuildOnboardingPromptsStore,
  } = guildId);
  constants = GuildStore.getGuild(guildId);
  const rulesPrompt = MemberVerificationFormStore.getRulesPrompt(guildId);
  let obj = { [closure_9.PROMPT]: obj2 };
  obj2 = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render(currentPrompt) {
      let num;
      GuildOnboardingPromptsDefault;
      if (currentPrompt != null) {
        num = currentPrompt.currentPrompt;
      }
      if (num == null) {
        num = 0;
      }
      return (
        <tmp2
          guildId={guildId}
          currentPromptIdx={num}
          prompts={importDefault}
          selectOption={dependencyMap}
          onClose={ChannelStore}
          landingAnimation={GuildStore}
          isFirstOpen={SelectedChannelStore}
          backShouldLeaveGuild={GuildOnboardingPromptsStore}
        />
      );
    },
  };
  const CONNECTIONS = constants.CONNECTIONS;
  const obj3 = {
    fullscreen: true,
    headerTitle,
    headerRight,
    headerLeft: obj4.getHeaderCloseButton(() => {
      if (GuildOnboardingPromptsStore) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
        if (null != channel) {
          if (channel.guild_id !== guildId) {
            const obj2 = router_utils;
            obj2.transitionTo(unpackModuleId.CHANNEL(channel.guild_id, channel.id));
          }
          ChannelStore();
        }
        const obj = router_utils;
        obj.transitionTo(unpackModuleId.ME, { navigationReplace: true });
      } else {
        ChannelStore();
      }
    }),
    render() {
      let tmp4 = 0 === importDefault.length;
      GuildOnboardingConnectionPromptDefault;
      if (tmp4) {
        const obj2 = GuildOnboardingUtils;
        tmp4 = !obj2.showRulesInOnboarding(closure_9, closure_10);
      }
      return <tmp3 guildId={guildId} isLastStep={tmp4} onComplete={onComplete} />;
    },
  };
  obj[CONNECTIONS] = obj3;
  obj[constants.COMPLETED] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingCompletedDefault, {
        guildId,
        prompts: importDefault,
        completeOnboarding,
        onClose() {
          onClose();
          closure_1_4();
        },
      });
    },
  };
  obj[constants.RULES] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingPrompt.RulesPrompt, { guildId, onClose: ChannelStore });
    },
  };
  obj4 = guildId(6010);
  return obj;
}
let constants = GuildOnboardingConstants.GuildOnboardingModalStates;
({ GuildFeatures: c10, Routes: unpackModuleId } = Constants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let backShouldLeaveGuild;
      let first;
      let isFirstOpen;
      let landingAnimation;
      let onClose;
      let onFinish;
      let stateFromStoresArray;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp18;
      let tmp19;
      let tmp6;
      let tmp8;
      let tmp2 = stateFromStoresArray;
      let obj = guildId(stateFromStoresArray[17]);
      const cResult = obj.c(33);
      guildId = guildId.guildId;
      ({ onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild } = guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function s() {
          const guild = GuildStore.getGuild(guildId);
          let tmp2 = null != guild;
          if (tmp2) {
            const features = guild.features;
            let hasItem = features.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
            if (hasItem) {
              const features2 = guild.features;
              hasItem = !features2.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            tmp2 = hasItem;
          }
          return tmp2;
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = guildId(tmp2[18]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildOnboardingPromptsStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function v() {
          return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
        };
        cResult[4] = guildId;
        cResult[5] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult3 = guildId(tmp2[18]);
      stateFromStoresArray = tmpResult3.useStateFromStoresArray(tmp8, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildOnboardingPromptsStore];
        cResult[6] = items2;
        tmp12 = items2;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] !== guildId) {
        const fn3 = function _() {
          return GuildOnboardingPromptsStore.getOnboardingConnections(guildId);
        };
        cResult[7] = guildId;
        cResult[8] = fn3;
        tmp14 = fn3;
      } else {
        tmp14 = cResult[8];
      }
      const tmpResult4 = guildId(tmp2[18]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp14);
      if (cResult[9] !== guildId) {
        class N {
          constructor(id, id2, selected) {
            const obj = GuildOnboardingActionCreatorsDefault;
            const option = obj.selectOption(guildId, id, id2, selected);
          }
        }
        cResult[9] = guildId;
        cResult[10] = N;
      } else {
        class N {
          constructor(id, id2, selected) {
            const obj = GuildOnboardingActionCreatorsDefault;
            const option = obj.selectOption(guildId, id, id2, selected);
          }
        }
      }
      if (cResult[11] === guildId) {
        class N {
          constructor(id, id2, selected) {
            const obj = GuildOnboardingActionCreatorsDefault;
            const option = obj.selectOption(guildId, id, id2, selected);
          }
        }
        if (cResult[14] === guildId) {
          class N {
            constructor(id, id2, selected) {
              const obj = GuildOnboardingActionCreatorsDefault;
              const option = obj.selectOption(guildId, id, id2, selected);
            }
          }
          const effect = react.useEffect(tmp19, tmp18);
          if (cResult[18] === backShouldLeaveGuild) {
            class N {
              constructor(id, id2, selected) {
                const obj = GuildOnboardingActionCreatorsDefault;
                const option = obj.selectOption(guildId, id, id2, selected);
              }
            }
          }
          const obj2 = {
            guildId,
            prompts: stateFromStoresArray,
            connections: stateFromStores1,
            selectOption: N,
            completeOnboarding: M,
            onFinish,
            onClose,
            landingAnimation,
            isFirstOpen,
            backShouldLeaveGuild,
          };
          cResult[18] = backShouldLeaveGuild;
          cResult[19] = M;
          cResult[20] = stateFromStores1;
          cResult[21] = guildId;
          cResult[22] = isFirstOpen;
          cResult[23] = landingAnimation;
          cResult[24] = onClose;
          cResult[25] = onFinish;
          cResult[26] = stateFromStoresArray;
          cResult[27] = N;
          const tmp24 = getScreens(obj2);
          class M {
            constructor() {
              const obj = GuildOnboardingActionCreatorsDefault;
              obj.completeOnboarding(guildId, stateFromStoresArray);
            }
          }
          cResult[28] = tmp24;
        }
        const fn4 = function k() {
          if (stateFromStores) {
            const obj = MemberVerificationActionCreatorsDefault;
            const verificationForm = obj.fetchVerificationForm(guildId);
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
      class M {
        constructor() {
          const obj = GuildOnboardingActionCreatorsDefault;
          obj.completeOnboarding(guildId, stateFromStoresArray);
        }
      }
      cResult[11] = guildId;
      cResult[12] = stateFromStoresArray;
      cResult[13] = M;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const onFinish = guildId.onFinish;
      const onClose = guildId.onClose;
      const landingAnimation = guildId.landingAnimation;
      const isFirstOpen = guildId.isFirstOpen;
      const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
      let stateFromStores;
      let stateFromStores1;
      let tmp2 = onClose;
      let obj = guildId(onClose[18]);
      const items = [stateFromStores];
      stateFromStores = obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(guildId);
        let tmp2 = null != guild;
        if (tmp2) {
          const features = guild.features;
          let hasItem = features.has(callback1.MEMBER_VERIFICATION_GATE_ENABLED);
          if (hasItem) {
            const features2 = guild.features;
            hasItem = !features2.has(callback1.MEMBER_VERIFICATION_MANUAL_APPROVAL);
          }
          tmp2 = hasItem;
        }
        return tmp2;
      });
      const items1 = [stateFromStores1];
      const obj2 = guildId(onClose[18]);
      const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () =>
        GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId),
      );
      const items2 = [stateFromStores1];
      const obj3 = guildId(onClose[18]);
      stateFromStores1 = obj3.useStateFromStores(items2, () =>
        GuildOnboardingPromptsStore.getOnboardingConnections(guildId),
      );
      const items3 = [guildId];
      const selectOption = landingAnimation.useCallback((id, id2, selected) => {
        const obj = GuildOnboardingActionCreatorsDefault;
        const option = obj.selectOption(guildId, id, id2, selected);
      }, items3);
      const items4 = [guildId, stateFromStoresArray];
      const callback1 = landingAnimation.useCallback(() => {
        const obj = GuildOnboardingActionCreatorsDefault;
        obj.completeOnboarding(guildId, stateFromStoresArray);
      }, items4);
      const items5 = [guildId, stateFromStores];
      const effect = landingAnimation.useEffect(() => {
        if (stateFromStores) {
          const obj = MemberVerificationActionCreatorsDefault;
          const verificationForm = obj.fetchVerificationForm(guildId);
        }
      }, items5);
      const items6 = [
        guildId,
        stateFromStoresArray,
        stateFromStores1,
        selectOption,
        callback1,
        onFinish,
        onClose,
        landingAnimation,
        isFirstOpen,
        backShouldLeaveGuild,
      ];
      if (isFirstOpen) {
        let PROMPT;
        if (stateFromStores1.length > 0) {
          PROMPT = selectOption.CONNECTIONS;
        }
        const Navigator = tmp(tmp2[22]).Navigator;
        const intl = tmp(tmp2[21]).intl;
        return (
          <Navigator
            screens={tmp8}
            initialRouteName={PROMPT}
            headerBackTitle={intl.string(guildId(tmp2[21]).t["13/7kX"])}
          />
        );
      }
      PROMPT = selectOption.PROMPT;
    };
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default tmp3;
