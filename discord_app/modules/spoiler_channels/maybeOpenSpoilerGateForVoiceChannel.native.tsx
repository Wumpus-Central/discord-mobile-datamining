// === Module 15936: maybeOpenSpoilerGateForVoiceChannel ===

// Module 15936 (maybeOpenSpoilerGateForVoiceChannel)
import useAlertStore from "useAlertStore" /* 6270 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6858 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 15937 */;
import ChannelStore from "ChannelStore" /* 5155 */;

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !SpoilerChannelUtils.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { channelId: channel.id };
    useAlertStore.openAlert(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }));
    flag = true;
  }
  return flag;
}