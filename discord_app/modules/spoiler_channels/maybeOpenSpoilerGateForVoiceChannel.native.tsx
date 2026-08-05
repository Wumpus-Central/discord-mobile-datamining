// discord_app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("isChannelSpoilerGated").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = require("SpoilerChannelUtils.tsx") /* isChannelSpoilerGated */;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    require("../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.openAlert(require("native/VoicePanelSpoilerAlert.tsx") /* VoicePanelSpoilerAlert */.VOICE_PANEL_SPOILER_KEY, jsx(require("native/VoicePanelSpoilerAlert.tsx"), { channelId: null }));
    flag = true;
    const obj2 = require("../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  }
  return flag;
};