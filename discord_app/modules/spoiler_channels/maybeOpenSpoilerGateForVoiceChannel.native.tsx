// discord_app/modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import isChannelSpoilerGated from "SpoilerChannelUtils.tsx";
import VoicePanelSpoilerAlert from "native/VoicePanelSpoilerAlert.tsx";
import VoicePanelSpoilerAlertDefault from "native/VoicePanelSpoilerAlert.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/spoiler_channels/maybeOpenSpoilerGateForVoiceChannel.native.tsx",
);

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
    useAlertStore.openAlert(
      VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY,
      jsx(VoicePanelSpoilerAlertDefault, { channelId: null }),
    );
    flag = true;
    const obj2 = useAlertStore;
  }
  return flag;
};
