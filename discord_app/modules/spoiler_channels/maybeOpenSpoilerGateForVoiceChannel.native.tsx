// discord_app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import SpoilerChannelUtils from "SpoilerChannelUtils.tsx";
import VoicePanelSpoilerAlert from "native/VoicePanelSpoilerAlert.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx");

export const maybeOpenSpoilerGateForVoiceChannel = function maybeOpenSpoilerGateForVoiceChannel(id) {
  const channel = ChannelStore.getChannel(id);
  let tmp2 = null == channel;
  if (!tmp2) {
    const obj = SpoilerChannelUtils;
    tmp2 = !obj.shouldShowSpoilerGateForChannelId(id);
  }
  let flag = !tmp2;
  if (flag) {
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    openAlert(
      VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
      jsx(VoicePanelSpoilerAlertDefault, { channelId: channel.id }),
    );
    flag = true;
  }
  return flag;
};
