// === Module 12709: maybeOpenSpoilerGateForVoiceChannel ===

// Module 12709 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 4811 */;
import isChannelSpoilerGated from "isChannelSpoilerGated" /* 6126 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12710 */;
import VoicePanelSpoilerAlertDefault from "VoicePanelSpoilerAlert" /* 12710 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  channel = channel.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = isChannelSpoilerGated;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: null };
    obj[0] = channel.id;
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: null }));
    flag = true;
    const obj2 = useAlertStore;
  }
  return flag;
};