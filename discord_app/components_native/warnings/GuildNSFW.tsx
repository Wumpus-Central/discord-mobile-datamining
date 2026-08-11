// discord_app/components_native/warnings/GuildNSFW.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { AgeGateSource } from "result";
import { jsx } from "jsxProd";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { AgeVerificationModalEntryPoint } from "../../modules/age_assurance/AgeVerificationAnalyticsUtils.tsx";
import { useAgeVerificationRunner } from "../../modules/age_assurance/AgeVerificationUtils.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../../modules/age_gate/AgeGateUtils.tsx";
import { GatedContent } from "GatedContent.tsx";

const require = arg1;
let closure_3 = ["modalType"];
let result = require("createGuildRecordFromRust").fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const _require = channelId;
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(channelId.guildId));
  let obj1 = _shouldShowAgeGateForVoiceChannel;
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = _useAgeVerificationRunner;
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    let obj = callback(7799);
    obj = { entryPoint: channelId(7801).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    outer1_1(outer1_2[8]).nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj.guildId = id;
  obj.channelId = channelId.channelId;
  const intl = tmp(1236).intl;
  obj.disagreement = intl.string(_getSystemLocale.t["/g10LC"]);
  if (_AgeVerificationModalEntryPoint.NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(7801).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(7801).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType: null, disagreementButtonVariant: "primary", onDisagree: null };
        obj[0] = modalType;
        obj[2] = handleDisagree;
        const merged1 = Object.assign(obj);
        return jsx(GatedContent, { modalType: null, disagreementButtonVariant: "primary", onDisagree: null });
      } else {
        obj1 = { modalType: null, onAgree: null, onDisagree: null };
        obj1[0] = modalType;
        obj1[1] = function handleAgree() {
          outer1_1(outer1_2[8]).nsfwAgree(channelId.guildId);
        };
        obj1[2] = handleDisagree;
        const merged2 = Object.assign(obj);
        return jsx(GatedContent, { modalType: null, onAgree: null, onDisagree: null });
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp5 = callback(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(GatedContent, { modalType, onAgree: callback, onDisagree: handleDisagree });
};