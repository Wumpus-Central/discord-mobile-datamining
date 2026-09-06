// discord_app/modules/voice_panel/VoicePanelUtils.native.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import StageVoicePanelExperiment from "../stage_channels/StageVoicePanelExperiment.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import VoicePanelStore from "VoicePanelStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  const result = StageVoicePanelExperiment.isStageVoicePanelEnabled("voice_panel_utils");
  let tmp2 = !result;
  if (!result) {
    let isGuildStageVoiceResult;
    if (channel2 != null) {
      isGuildStageVoiceResult = channel2.isGuildStageVoice();
    }
    tmp2 = isGuildStageVoiceResult;
  }
  return !tmp2;
};
export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  const items = [ChannelStore, RTCConnectionStore];
  return useStateFromStores.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let result = !isGuildStageVoiceResult;
      if (isGuildStageVoiceResult) {
        result = StageVoicePanelExperiment.isStageVoicePanelEnabled("voice_panel_utils");
      }
      tmp = result;
    }
    return tmp;
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
};
