// === Module 12932: maybeOpenSpoilerGateForVoiceChannel ===

// Module 12932 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 4906 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 7329 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12933 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    let obj = SpoilerChannelUtils;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { channelId: channel.id };
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }));
    flag = true;
  }
  return flag;
};