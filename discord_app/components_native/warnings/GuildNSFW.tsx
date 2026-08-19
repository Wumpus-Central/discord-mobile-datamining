// discord_app/components_native/warnings/GuildNSFW.tsx
import showTooManyUserGuildsAlertDefault from "../../actions/GuildActionCreators.tsx";
import GatedContentDefault from "GatedContent.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { AgeGateSource } from "../../modules/age_gate/AgeGateConstants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useAgeVerificationRunner } from "../../modules/age_assurance/AgeVerificationUtils.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../../modules/age_gate/AgeGateUtils.tsx";

const require = fn;
let closure_3 = ["modalType"];
let result = require("obj132").fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const _require = channelId;
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(channelId.guildId));
  obj1 = shouldShowAgeGateForVoiceChannel;
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = useAgeVerificationRunner;
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    callback(5428);
    const obj = { entryPoint: channelId(5254).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    showTooManyUserGuildsAlertDefault.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj.guildId = id;
  obj.channelId = channelId.channelId;
  const intl = tmp(1236).intl;
  obj.disagreement = intl.string(require("../../intl/index.native.tsx").t["/g10LC"]);
  if (require("../../modules/age_assurance/AgeVerificationAnalyticsUtils.tsx").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(5254).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(5254).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType: null, disagreementButtonVariant: "primary", onDisagree: null };
        obj[0] = modalType;
        obj[2] = handleDisagree;
        const merged1 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType: null, disagreementButtonVariant: "primary", onDisagree: null });
      } else {
        obj1 = { modalType: null, onAgree: null, onDisagree: null };
        obj1[0] = modalType;
        obj1[1] = function handleAgree() {
          showTooManyUserGuildsAlertDefault.nsfwAgree(channelId.guildId);
        };
        obj1[2] = handleDisagree;
        const merged2 = Object.assign(obj);
        return jsx(GatedContentDefault, { modalType: null, onAgree: null, onDisagree: null });
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp5 = callback(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(GatedContentDefault, { modalType, onAgree: callback, onDisagree: handleDisagree });
};