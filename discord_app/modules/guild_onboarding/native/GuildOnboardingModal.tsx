// discord_app/modules/guild_onboarding/native/GuildOnboardingModal.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../guild_member_verification/MemberVerificationFormStore.tsx";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/GuildStore.tsx";
import closure_7 from "../../../stores/SelectedChannelStore.tsx";
import closure_8 from "../GuildOnboardingPromptsStore.tsx";
import { GuildOnboardingModalStates as closure_9 } from "GuildOnboardingConstants.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
({ GuildFeatures: c10, Routes: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let stateFromStoresArray;
  let callback;
  let callback1;
  let obj = guildId(onClose[16]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(guildId);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let hasItem = features.has(closure_1_10.MEMBER_VERIFICATION_GATE_ENABLED);
      if (hasItem) {
        const features2 = guild.features;
        hasItem = !features2.has(tmp3.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      tmp2 = hasItem;
      tmp3 = closure_1_10;
    }
    return tmp2;
  });
  const items1 = [callback];
  stateFromStoresArray = guildId(onClose[16]).useStateFromStoresArray(items1, () =>
    callback.getOnboardingPromptsForOnboarding(guildId),
  );
  let obj2 = guildId(onClose[16]);
  const items2 = [callback];
  const stateFromStores1 = guildId(onClose[16]).useStateFromStores(items2, () =>
    callback.getOnboardingConnections(guildId),
  );
  const items3 = [guildId];
  callback = landingAnimation.useCallback((id, id2) => {
    const option = onFinish(onClose[17]).selectOption(guildId, id, id2, arg2);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  callback1 = landingAnimation.useCallback(() => {
    onFinish(onClose[17]).completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = landingAnimation.useEffect(() => {
    if (stateFromStores) {
      const verificationForm = onFinish(onClose[18]).fetchVerificationForm(guildId);
      const obj = onFinish(onClose[18]);
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
    obj = { screens: null, initialRouteName: null, headerBackTitle: null };
    obj[0] = tmp8;
    obj[1] = PROMPT;
    const intl = tmp(tmp2[20]).intl;
    obj[2] = intl.string(tmp(tmp2[20]).t["13/7kX"]);
    return jsx(tmp(tmp2[19]).Navigator, { screens: null, initialRouteName: null, headerBackTitle: null });
  }
  PROMPT = callback1.PROMPT;
}
