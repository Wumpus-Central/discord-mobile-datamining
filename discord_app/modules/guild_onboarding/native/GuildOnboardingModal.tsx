// discord_app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
import MemberVerificationActionCreatorsDefault from "../../guild_member_verification/MemberVerificationActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import GuildOnboardingActionCreatorsDefault from "../GuildOnboardingActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MemberVerificationFormStore from "../../guild_member_verification/MemberVerificationFormStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import GuildOnboardingPromptsStore from "../GuildOnboardingPromptsStore.tsx";

require = fn;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
let closure_9 = fn(7097).GuildOnboardingModalStates;
const Constants = fn(1074);
({ GuildFeatures: c10, Routes: closure_11 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let callback;
  let obj = guildId(onClose[16]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
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
  });
  const items1 = [callback];
  const stateFromStoresArray = guildId(onClose[16]).useStateFromStoresArray(items1, () =>
    GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId),
  );
  let obj2 = guildId(onClose[16]);
  const items2 = [callback];
  const stateFromStores1 = guildId(onClose[16]).useStateFromStores(items2, () =>
    GuildOnboardingPromptsStore.getOnboardingConnections(guildId),
  );
  const items3 = [guildId];
  callback = landingAnimation.useCallback((id, id2, selected) => {
    const option = GuildOnboardingActionCreatorsDefault.selectOption(guildId, id, id2, selected);
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
  const items6 = [
    guildId,
    stateFromStoresArray,
    stateFromStores1,
    callback,
    callback1,
    onFinish,
    onClose,
    landingAnimation,
    isFirstOpen,
    backShouldLeaveGuild,
  ];
  if (isFirstOpen) {
    if (stateFromStores1.length > 0) {
      let PROMPT = callback1.CONNECTIONS;
    }
    obj = { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null };
    const intl = tmp(tmp2[20]).intl;
    obj.headerBackTitle = intl.string(tmp(tmp2[20]).t["13/7kX"]);
    return jsx(tmp(tmp2[19]).Navigator, { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null });
  }
  PROMPT = callback1.PROMPT;
  const obj3 = guildId(onClose[16]);
}
