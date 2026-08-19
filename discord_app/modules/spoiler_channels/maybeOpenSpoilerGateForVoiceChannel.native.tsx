// discord_app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import isChannelSpoilerGated from "SpoilerChannelUtils.tsx";
import VoicePanelSpoilerAlert from "native/VoicePanelSpoilerAlert.tsx";
import VoicePanelSpoilerAlertDefault from "native/VoicePanelSpoilerAlert.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(guildId) {
  channel = channel.getChannel(guildId);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = isChannelSpoilerGated;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(guildId);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: null }));
    flag = true;
  }
  return flag;
};