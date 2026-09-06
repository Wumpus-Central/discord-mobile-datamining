// discord_app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SpoilerChannelUtils from "SpoilerChannelUtils.tsx";
import VoicePanelSpoilerAlert from "native/VoicePanelSpoilerAlert.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

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
    useAlertStore.openAlert(
      VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
      jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }),
    );
    flag = true;
  }
  return flag;
};
